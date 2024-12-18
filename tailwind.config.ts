import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
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
  },
  plugins: [],
} satisfies Config;
