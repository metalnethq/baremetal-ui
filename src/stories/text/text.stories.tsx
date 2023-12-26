import Text from "../../lib/components/text";
import "../../index.css";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Text/Basic",
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
    className: {
      control: {
        disable: true,
      },
    },
    fontSize: {
      control: {
        disable: true,
      },
      description: "This is determined by the element type",
    },
  },
};

type Story = StoryObj<typeof Text>;

export const Basic: Story = {
  args: {
    children: "This is a text",
  },
};

export const ClassNames: Story = {
  args: {
    children: "This is a text",
    className: "text-blue-500",
  },
};

export default meta;
