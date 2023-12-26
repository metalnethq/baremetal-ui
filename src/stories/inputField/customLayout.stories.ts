import { CustomLayout } from "./customLayout";
import { Meta, StoryObj } from "@storybook/react";
import "../../index.css";

const meta: Meta<typeof CustomLayout> = {
  component: CustomLayout,
  title: "Inputfield/Custom layout",
  parameters: {
    layout: "centered",
  },

  argTypes: {
    label: {
      control: "text",
    },
    type: {
      control: "text",
    },
    error: {
      control: "text",
    },
    onChange: { action: "onChange" },
  },
};

type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {},
};

export default meta;
