import { Meta, StoryObj } from "@storybook/react";
import Component from "../../../lib/components/loader/shimmer";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Loader/Shimmer",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    numberOfLines: {
      control: {
        type: "number",
      },
      description: "Number of lines",
    },
    intent: {
      control: {
        type: "select",
        options: ["card", "list"],
      },
      description: "Intent",
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    numberOfLines: 4,
    intent: "card",
  },
};

export default meta;
