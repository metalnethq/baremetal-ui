/** @type {import('tailwindcss').Config} */
import theme from "./src/lib/theme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bm_primary: theme.bm_primary,
        bm_secondary: theme.bm_secondary,
        bm_warning: theme.bm_warning,
        bm_success: theme.bm_success,
        bm_danger: theme.bm_danger,
        bm_info: theme.bm_info,
        bm_gray: theme.bm_gray,
        bm_light: theme.bm_light,
        bm_dark: theme.bm_dark,
        bm_border: theme.bm_border,
        bm_primary_text: theme.bm_primary_text,
      },
    },
  },
  plugins: [],
};
