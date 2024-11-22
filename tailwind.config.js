const colors = {
  current: "currentColor",
  "primary-white": "rgba(255, 255, 255, 1)",
  "primary-light-green": "rgba(244, 248, 239, 1)",
  "primary-medium-green": "rgba(214, 224, 211, 1)",
  "primary-dark-green": "rgba(60, 74, 65, 1)",
  "primary-light-purple": "rgba(226, 212, 254, 1)",
  "secondary-medium-purple": "rgba(148, 107, 182, 1)",
  "secondary-dark-purple": "rgba(69, 56, 72, 1)",
  "secondary-yellow": "rgba(255, 221, 165, 1)",
  "secondary-orange": "rgba(255, 155, 110, 1)",
  "secondary-pink": "rgba(255, 204, 204, 1)",
};

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
      100: "100px",
      133: "133px",
    },
    gap: {
      4: "4px",
      8: "8px",
      10: "10px",
      20: "20px",
      24: "24px",
      26: "26px",
      48: "48px",
    },
    colors,
    fontSize: {
      "1xs": [
        "12px",
        {
          lineHeight: "10px",
          fontWeight: "500",
        },
      ],
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
          lineHeight: "21px",
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
    fontFamily: {
      neue: ["PP Neue Montreal"],
      inter: ["Inter"],
    },
    extend: {
      colors,
      opacity: {
        20: "0.2",
      },
      height: {
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        50: "50px",
        64: "64px",
        330: "330px",
        440: "440px",
        573: "573px",
      },
      width: {
        24: "24px",
        48: "48px",
        64: "64px",
        300: "300px",
        592: "592px",
        800: "800px",
      },
      strokeWidth: {
        1: "1px",
      },
      textDecorationThickness: {
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
        32: "32px",
        40: "40px",
        48: "48px",
        72: "72px",
        120: "120px",
        logoSliderMargin: "calc((100vw - 612px) / 12)",
      },
      padding: {
        7: "7px",
        8: "8px",
        9: "9px",
        12: "12px",
        13: "13px",
        16: "16px",
        18: "18px",
        24: "24px",
        39: "39px",
        40: "40px",
        72: "72px",
        100: "100px",
        120: "120px",
      },
      translate: {
        4: "4px",
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
  safelist: [
    {
      pattern: /(primary-|secondary-)*/,
    },
  ],
  plugins: [],
};
