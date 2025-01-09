import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font)"],
      },
      colors: {
        greenAccent: "var(--green)",
        purpleAccent: "var(--purple)",
        redAccent: "var(--red)",
        blackPrimary: "var(--black)",
        whiteBg: "var(--white)",
        yellowAccent: "var(--yellow)",
      },
    },
    screens: {
      base: "100px",
      smallPhone: "360px",
      phone: "480px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
} satisfies Config;
