import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        headings: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: "#FF7F50",
        secondary: "#6A5ACD",
        accent: "#FFD700",
        backgroundLight: "#F8F8F8",
        backgroundDark: "#282C34",
        textLight: "#333333",
        textDark: "#FFFFFF",
        success: "#28A745",
        error: "#DC3545",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;