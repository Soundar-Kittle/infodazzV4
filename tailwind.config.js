/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: ['animate-slideUp'],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        flicker: {
          "0%": { opacity: "0.9", filter: "brightness(1)" },
          "100%": { opacity: "1", filter: "brightness(1.3)" }
        },
        "flicker-strong": {
          "0%": { opacity: "0.8", filter: "brightness(1)" },
          "100%": { opacity: "1", filter: "brightness(1.5)" }
        },
        rotateOrbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        scaleIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        wiggle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" }
        }
      },
      animation: {
       slideUp: 'slideUp 0.8s ease forwards',
        flicker: "flicker 1.5s infinite alternate",
        "flicker-strong": "flicker-strong 0.1s infinite alternate",
        rotateOrbit: "rotateOrbit 20s linear infinite",
        scaleIn: "scaleIn 0.8s ease-out forwards",
        wiggle: "wiggle 6s ease-in-out infinite"
      }
    }
  },
  plugins: [require("tailwind-scrollbar")]
};
