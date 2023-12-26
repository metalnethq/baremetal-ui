# BareMetal

A collection of simple React components built with TailwindCSS.

## Installation

```bash
pnpm i @metalnethq/baremetal-ui // PNPM
npm i @metalnethq/baremetal-ui // NPM
yarn add @metalnethq/baremetal-ui // Yarn
```

## [Demo](https://metalnethq.github.io/baremetal-ui)

### Peer Dependencies

This library has the following peer dependencies:

- react
- react-dom
- tailwindcss

### Setting up

1. In your `tailwind.config.js` file, add the following:

```js
module.exports = {
  // ...
  content: [
    // ...
    "./node_modules/@metalnethq/baremetal/**/*.{js,jsx}",
  ],
};
```

2. Create `theme.js/.ts` file and add the theme object to it. Right now there are only have few customization. You can find them [here.](https://github.com/metalnethq/baremetal-ui/blob/main/src/lib/theme.ts) Then add following code to the `tailwind config` file:

```js
import theme from "./theme";

export default {
  // ...
  content: [
    // ...
    "./node_modules/@metalnethq/baremetal-ui/**/*.{js,jsx}",
  ],
  theme: {
    // ...
    extend: {
      // ...
      colors: {
        // ...
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
  // ...
};
```

<h2
  style="
    color: #f56565;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  "
>
  Warning: This library is still in development and subject to change. Use it
  with caution.
</h2>
