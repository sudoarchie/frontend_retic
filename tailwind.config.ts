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
        primary:'#4285F4',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    addVariablesForColors, // Pass the custom plugin
  ],
};

// Custom plugin to add color variables
function addVariablesForColors({ addBase, theme }: { addBase: any, theme: any }) {
  const allColors = flattenColorPalette(theme("colors")); // Flatten the color palette
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  
  addBase({
    ":root": newVars, // Add all CSS variables to :root
  });
}

// Flatten the color palette from Tailwind's theme
function flattenColorPalette(colors: { [key: string]: string | { [key: string]: string } }): { [key: string]: string } {
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
