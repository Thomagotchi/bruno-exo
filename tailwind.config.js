/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    borderWidth: {
      default: "1px",
      0.8: "0.8px",
    },
    borderRadius: {
      6: "6px",
      8: "8px",
      80: "80px",
    },
    gap: {
      4: "4px",
      8: "8px",
      20: "20px",
      24: "24px",
      26: "26px",
      48: "48px",
    },
    fontSize: {
      "1s": [
        "14px",
        {
          lineHeight: "10px",
          fontWeight: "500",
        },
      ],
      "2s": [
        "16px",
        {
          lineHeight: "19px",
          fontWeight: "400",
        },
      ],
      "3s": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      "4s": [
        "16px",
        {
          lineHeight: "19px",
          fontWeight: "500",
        },
      ],
      "1m": [
        "32px",
        {
          lineHeight: "38px",
          fontWeight: "500",
        },
      ],
      "2m": [
        "40px",
        {
          lineHeight: "48px",
          fontWeight: "500",
        },
      ],
      "1l": [
        "48px",
        {
          lineHeight: "62px",
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
      neue: ["PP Neue Montreal"],
      inter: ["Inter"],
    },
    extend: {
      height: {
        32: "32px",
        40: "40px",
        50: "50px",
        64: "64px",
        440: "440px",
      },
      width: {
        64: "64px",
        300: "300px",
        800: "800px",
      },
      strokeWidth: {
        1: "1px",
      },
      spacing: {
        1: "1px",
        2: "2px",
        18: "18px",
        1192: "1192px",
        "200%": "200%",
      },
      margin: {
        4: "4px",
        5: "5px",
        8: "8px",
        12: "12px",
        16: "16px",
        24: "24px",
        40: "40px",
        48: "48px",
        120: "120px",
        logoSliderMargin: "calc((100vw - 612px) / 12)",
      },
      padding: {
        8: "8px",
        9: "9px",
        12: "12px",
        16: "16px",
        18: "18px",
        24: "24px",
        39: "39px",
        40: "40px",
        72: "72px",
        100: "100px",
        120: "120px",
      },
      animation: {
        logoSliderAnimation: "slide 60s infinite linear",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
