/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "var(--main-bg)",
        "nav-bg": "var(--nav-bg)",
        "text-access": "var(--text-access)",
        "text-paid": "var(--text-paid)",
        "text-pending": "var(--text-pending)",
        "text-draft": "var(--text-draft)",
        "btn-bg": "var(--btn-bg)",
        "card-bg": "var(--card-bg)",
        "total-bg": "var(--total-bg)",
        "items-bg": "var(--items-bg)",
        "main-text": "var(--main-text)",
      },
    },
  },
  plugins: [],
};
