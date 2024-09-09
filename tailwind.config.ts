import { Config } from "tailwindcss"; // Correct type import from Tailwind

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4285F4",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors, // Pass the custom plugin
  ],
};

// Custom plugin to add color variables
function addVariablesForColors({
  addBase,
  theme,
}: {
  addBase: any;
  theme: any;
}) {
  const allColors = flattenColorPalette(theme("colors")); // Flatten the color palette
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars, // Add all CSS variables to :root
  });
}

// Flatten the color palette from Tailwind's theme
function flattenColorPalette(colors: {
  [key: string]: string | { [key: string]: string };
}): { [key: string]: string } {
  const result: { [key: string]: string } = {};

  function recursiveFlatten(obj: any, parentKey: string = "") {
    Object.entries(obj).forEach(([key, value]) => {
      const newKey = parentKey ? `${parentKey}-${key}` : key;
      if (typeof value === "string") {
        result[newKey] = value;
      } else {
        recursiveFlatten(value, newKey);
      }
    });
  }

  recursiveFlatten(colors);
  return result;
}

export default config;
