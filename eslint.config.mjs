// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";
import {overrides} from "eslint-config-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    ...storybook.configs["flat/recommended"],
    ...{
        overrides: {
            files: ["src/_generated/**/*.ts"],
            rules: {
                '@typescript-eslint/no-explicit-any': 'off',
            }
        }
    }
];

export default eslintConfig;
