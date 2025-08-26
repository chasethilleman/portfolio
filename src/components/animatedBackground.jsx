export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-neutral-950">
      {/* Big blurred gradient blobs */}
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-cyan-500 opacity-30 blur-[120px] animate-pulse" />
      <div className="absolute top-1/2 -right-40 h-[28rem] w-[28rem] rounded-full bg-purple-500 opacity-30 blur-[120px] animate-[float_12s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-pink-500 opacity-20 blur-[100px] animate-[float_16s_ease-in-out_infinite]" />
    </div>
  );
}
