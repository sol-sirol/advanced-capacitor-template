import headlessUiPlugin from "@headlessui/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // TODO: произвести настройки tailwind
  // theme: {
  //   colors: {},
  //   borderRadius: {},
  //   dropShadow: {},
  //   fontSize: {},
  //   extend: {
  //     spacing: {},
  //     rotate: {},
  //   },
  // },
  plugins: [headlessUiPlugin],
};
