import { CustomLayout } from "./customLayout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CustomLayout> = {
  component: CustomLayout,
  title: "Card/Custom layout",
  parameters: {
    layout: "centered",
  },

  argTypes: {},
};

type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {},
};

export default meta;
