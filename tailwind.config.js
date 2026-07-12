/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /** Harmonie — terre, brique, pêche (distinct du vert psy) */
        brand: {
          DEFAULT: "#C4705A",
          light: "#E8A090",
          dark: "#5C3828",
        },
        peach: {
          DEFAULT: "#F0C4B0",
          light: "#F8E8DE",
        },
        sage: {
          DEFAULT: "#7A9072",
          light: "#B8C9B0",
        },
        terracotta: {
          DEFAULT: "#A85A42",
          muted: "#D4A898",
        },
        ink: "#2C2419",
        cream: {
          DEFAULT: "#FBF7F3",
          alt: "#F3EBE3",
          warm: "#EDE3D8",
        },
        warm: {
          text: "#3D3429",
          "text-secondary": "#6B5E52",
          "text-light": "#8A7B6E",
          border: "#E0D4C8",
        },
        /** Alias legacy — pointe vers la nouvelle palette */
        lavender: {
          DEFAULT: "#7A9072",
          light: "#B8C9B0",
        },
        sky: {
          DEFAULT: "#7A9072",
          light: "#D4E4CE",
        },
        mist: {
          DEFAULT: "#F3EBE3",
          soft: "#FBF7F3",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(44 36 25 / 0.05)",
        card: "0 8px 30px rgba(92, 56, 40, 0.08)",
        "card-hover": "0 16px 44px rgba(92, 56, 40, 0.12)",
        nav: "0 2px 24px rgba(92, 56, 40, 0.07)",
        blog: "0 8px 32px rgba(92, 56, 40, 0.07)",
        "blog-hover": "0 16px 48px rgba(92, 56, 40, 0.11)",
        cta: "0 6px 24px rgba(196, 112, 90, 0.35)",
        "hero-frame": "0 24px 56px -8px rgba(92, 56, 40, 0.22)",
        banner: "0 12px 40px rgba(92, 56, 40, 0.15)",
        animal: "0 4px 20px rgba(92, 56, 40, 0.06)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "soft-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "soft-float": "soft-float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
