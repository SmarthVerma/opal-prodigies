import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // Disable unused variable warnings
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Disable 'any' type restriction
      "@typescript-eslint/no-explicit-any": "off",

      // Disable empty interface restriction
      "@typescript-eslint/no-empty-interface": "off",
    },
  },
];

export default eslintConfig;