module.exports = {
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-20px) translateX(20px)" },
        },
      },
      animation: {
        float: "float 10s ease-in-out infinite",
      },
    },
  },
};
