import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        extend: {
            backgroundImage: {
                egyptian: "url('/images/about/egyptian_1.jpg')",
            },
            screens: {
                widescreen: { raw: "(min-aspect-ratio: 23/20)" },
                tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
            },
            boxShadow: {
                xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
            },
            maxWidth: {
                "10xl": "1440px",
            },
            fontFamily: {
                spaceGrotesk: ["var(--font-space-grotesk)"],
                blanka: ["var(--font-blanka)"],
            },
            borderRadius: {
                10: "10px",
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: "calc(var(--radius) - 4px)",
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
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            scale: {
                25: "0.25",
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",
                dimWhite: "rgba(255, 255, 255, 0.7)",
                //60
                shark: {
                    "50": "#f2f8f9",
                    "100": "#ddebf0",
                    "200": "#bfd9e2",
                    "300": "#93becd",
                    "400": "#5f9bb1",
                    "500": "#447f96",
                    "600": "#3b697f",
                    "700": "#355769",
                    "800": "#324a58",
                    "900": "#2d404c",
                    DEFAULT: "#1a2832",
                },
                //30
                astral: {
                    "50": "#f0f9fb",
                    "100": "#d9f1f4",
                    "200": "#b8e2e9",
                    "300": "#86ccda",
                    DEFAULT: "#67b9cb",
                    "500": "#3291a8",
                    "600": "#2c768e",
                    "700": "#2a6074",
                    "800": "#2a5060",
                    "900": "#264553",
                    "950": "#152b37",
                },
                //10
                gold: {
                    "50": "#ffffe7",
                    "100": "#feffc1",
                    "200": "#fffd86",
                    "300": "#fff441",
                    "400": "#ffe60d",
                    DEFAULT: "#ffd700",
                    "600": "#d19e00",
                    "700": "#a67102",
                    "800": "#89580a",
                    "900": "#74480f",
                    "950": "#442604",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
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
                glassmorphism: {
                    DEFAULT: "hsla(var(--glassmorphism))",
                    hover: "hsla(var(--glassmorphism-hover))",
                    foreground: "hsl(var(--glassmorphism-foreground))",
                },
                warning: {
                    DEFAULT: "hsl(var(--warning))",
                    foreground: "hsl(var(--warning-foreground))",
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
