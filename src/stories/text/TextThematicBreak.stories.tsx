import Text from "../../lib/components/text/thematicBreak";
import "../../index.css";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Text/ThematicBreak",
  component: Text,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    el: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "label"],
      },
    },
    weight: {
      control: {
        type: "select",
        options: [
          "extraBold",
          "bold",
          "semiBold",
          "light",
          "extraLight",
          "thin",
        ],
      },
    },
    fontSize: {
      control: {
        disable: true,
      },
      description: "This is determined by the element type",
    },
    lineClassName: {
      control: {
        disable: true,
      },
      description: "className for the line element",
    },
    wrapperClassName: {
      control: {
        disable: true,
      },
      description: "className for the wrapper element",
    },
    textClassName: {
      control: {
        disable: true,
      },
      description: "className for the text element",
    },
    lineWrapperClassName: {
      control: {
        disable: true,
      },
      description: "className for the line wrapper element",
    },
  },
};

type Story = StoryObj<typeof Text>;

export const Basic: Story = {
  args: {
    children: "This is a text",
  },
};

export default meta;
