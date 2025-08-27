import { useEffect, useMemo, useRef, useState } from "react";

/**
 * SymbolWater
 * Animated water-like effect made of symbols, fills its container.
 *
 * The component measures its container, computes rows/cols based on font size,
 * and generates enough text dynamically to fit without resizing text.
 */
export default function SymbolWater({
  charset = "=-+*:",
  fps = 24,
  speed = 0.35, // slower base for organic feel
  waveAmp = 0.6,
  waveFreq = 0.16,
  shimmer = 0.08, // reduced shimmer to avoid glitter
  color = "#ffffff",
  opacity = 0.3,
  fadeInMs = 800,
  fadeInDelayMs = 0,
  bg = "oklch(20.5% 0 0)",
  fontSize = 12, // px number instead of string for measurement
  letterSpacing = 0.02, // em
  lineHeight = 1.0, // em
  className = "",
  ariaLabel = "Animated water made of symbols",
}) {
  const containerRef = useRef(null);
  const [dims, setDims] = useState({ rows: 24, cols: 96 });

  // Measure container and compute rows/cols
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const charWidth = fontSize * 0.6 + fontSize * letterSpacing; // approx for monospace
      const charHeight = fontSize * lineHeight;
      const cols = Math.max(16, Math.floor(rect.width / charWidth));
      const rows = Math.max(8, Math.floor(rect.height / charHeight));
      setDims({ rows, cols });
    };
    measure();
    const obs = new ResizeObserver(measure);
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [fontSize, letterSpacing, lineHeight]);

  // Animated text state
  const [lines, setLines] = useState([]);
  const rafRef = useRef(0);
  const tRef = useRef(0);
  const frameInterval = 1000 / fps;
  const lastTimeRef = useRef(0);

  // Fade-in state
  const [hasFadedIn, setHasFadedIn] = useState(false);

  // Weighted thresholds (light → dark) tuned to favor denser symbols overall
  // Order must be [":", "-", "+", "=", "*"] for mapping
  const thresholds = useMemo(() => [0.3, 0.52, 0.7, 0.86, 1.0], []);
  const orderedSymbols = useMemo(() => [":", "-", "+", "=", "*"], []);

  useEffect(() => {
    let running = true;

    const tick = (now) => {
      if (!running) return;
      const last = lastTimeRef.current || 0;
      if (now - last < frameInterval) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const dt = (now ? now - last : frameInterval) / 1000;
      lastTimeRef.current = now;
      tRef.current += dt;
      const t = tRef.current;

      const rows = dims.rows;
      const cols = dims.cols;
      const next = new Array(rows);

      const scale = 1.9; // spatial frequency
      const warp = 0.55; // domain warp intensity
      const flow = 0.12; // flow speed through noise field

      for (let r = 0; r < rows; r++) {
        let s = "";
        const rowPhase = r * 0.37;
        const rowShift = Math.sin((t * speed + rowPhase) * waveFreq) * waveAmp;

        for (let c = 0; c < cols; c++) {
          const u = (c + rowShift) / Math.max(1, cols - 1);
          const v = r / Math.max(1, rows - 1);

          const p0x = u * scale;
          const p0y = v * scale;

          const wx = noise2(p0x + t * flow, p0y - t * flow);
          const wy = noise2(p0x + 100.0 + t * flow, p0y + 100.0 - t * flow);
          const px = p0x + (wx - 0.5) * 2.0 * warp;
          const py = p0y + (wy - 0.5) * 2.0 * warp;

          let val = fbm(px + t * 0.08, py - t * 0.06, 4);

          if (shimmer > 0) {
            const tw = 0.5 + 0.5 * Math.sin(t * 0.9 + c * 0.05 + r * 0.11);
            val = clamp01(val * (1 - shimmer) + tw * shimmer);
          }

          val = Math.pow(val, 0.78);

          val += (bayer4[r & 3][c & 3] - 0.5) * 0.08;
          val = clamp01(val);

          let symIndex = 0;
          while (symIndex < thresholds.length && val > thresholds[symIndex])
            symIndex++;
          const sym =
            orderedSymbols[Math.min(symIndex, orderedSymbols.length - 1)];

          s += charset.includes(sym) ? sym : charset[charset.length - 1] || sym;
        }
        next[r] = s;
      }

      setLines(next);

      if (!hasFadedIn) {
        const prefersReduced = window.matchMedia?.(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReduced) {
          setHasFadedIn(true);
        } else {
          setTimeout(() => setHasFadedIn(true), fadeInDelayMs);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, [
    dims,
    frameInterval,
    speed,
    waveAmp,
    waveFreq,
    shimmer,
    charset,
    thresholds,
    orderedSymbols,
    hasFadedIn,
    fadeInDelayMs,
  ]);

  return (
    <div
      ref={containerRef}
      className={
        "w-full h-full overflow-hidden select-none absolute " + className
      }
      style={{ background: bg }}
    >
      <pre
        aria-label={ariaLabel}
        className="m-0 p-0 font-mono whitespace-pre leading-none"
        style={{
          color,
          opacity: hasFadedIn
            ? typeof opacity === "number"
              ? opacity
              : 0.3
            : 0,
          transition: `opacity ${fadeInMs}ms ease`,
          willChange: "opacity",
          fontSize: fontSize + "px",
          letterSpacing: letterSpacing + "em",
          lineHeight: lineHeight + "em",
          textShadow: `${hexToRgba(color, 0.35)} 0 0 6px`,
        }}
      >
        {lines.join("\n")}
      </pre>
    </div>
  );
}

// helpers
function clamp01(x) {
  return x < 0 ? 0 : x > 1 ? 1 : x;
}

function hexToRgba(hex, a = 1) {
  const m = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex);
  if (!m) return `rgba(255,255,255,${a})`;
  return `rgba(${parseInt(m[1], 16)},${parseInt(m[2], 16)},${parseInt(
    m[3],
    16
  )},${a})`;
}

// Ordered dithering matrix (Bayer 4x4)
const bayer4 = [
  [0 / 16, 8 / 16, 2 / 16, 10 / 16],
  [12 / 16, 4 / 16, 14 / 16, 6 / 16],
  [3 / 16, 11 / 16, 1 / 16, 9 / 16],
  [15 / 16, 7 / 16, 13 / 16, 5 / 16],
];

// Smooth interpolation helpers
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function smooth(t) {
  return t * t * (3 - 2 * t);
}

// Pseudorandom hash → [0,1)
function hash(x, y) {
  let n = Math.imul(x, 374761393) ^ Math.imul(y, 668265263);
  n = (n ^ (n >>> 13)) >>> 0;
  n = Math.imul(n, 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
}

// 2D value noise with smooth interpolation
function noise2(x, y) {
  const xi = Math.floor(x),
    yi = Math.floor(y);
  const xf = x - xi,
    yf = y - yi;
  const a = hash(xi, yi);
  const b = hash(xi + 1, yi);
  const c = hash(xi, yi + 1);
  const d = hash(xi + 1, yi + 1);
  const u = smooth(xf);
  const v = smooth(yf);
  return lerp(lerp(a, b, u), lerp(c, d, u), v);
}

// Fractal Brownian Motion (sum of octaves)
function fbm(x, y, octaves = 4) {
  let f = 0.0,
    amp = 0.5,
    freq = 1.0;
  for (let i = 0; i < octaves; i++) {
    f += noise2(x * freq, y * freq) * amp;
    freq *= 2.0;
    amp *= 0.5;
  }
  return clamp01(f);
}
