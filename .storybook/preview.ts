import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "stories",
          ["welcome"],
          "Button",
          "Text",
          "Inputfield",
          ["Basic", "Custom Layout", "input element"],
          "Card",
          "loader",
          ["Shimmer"],
        ],
      },
    },
  },
};

export default preview;
