/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    borderWidth: {
      default: "1px",
    },
    borderRadius: {
      6: "6px",
    },
    gap: {
      8: "8px",
      24: "24px",
    },
    fontSize: {
      "1xl": [
        "14px",
        {
          lineHeight: "10px",
          fontWeight: "500",
        },
      ],
    },
    colors: {
      current: "currentColor",
      "primary-light-green": "rgba(244, 248, 239, 1)",
      "primary-medium-green": "rgba(214, 224, 211, 1)",
      "primary-dark-green": "rgba(60, 74, 65, 1)",
      "primary-light-purple": "rgba(226, 212, 254, 1)",
      "secondary-medium-purple": "rgba(148, 107, 182, 1)",
    },
    fontFamily: {
      neue: ["PP Neue Montreal", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      height: {
        40: "40px",
        440: "440px",
      },
      strokeWidth: {
        1: "1px",
      },
      spacing: {
        1192: "1192px",
      },
      margin: {
        8: "8px",
        12: "12px",
        24: "24px",
        40: "40px",
      },
      padding: {
        8: "8px",
        12: "12px",
        24: "24px",
      },
    },
  },
  plugins: [],
};
