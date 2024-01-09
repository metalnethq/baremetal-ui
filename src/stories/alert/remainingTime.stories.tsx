import RemainingTime from "./remainingTime";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RemainingTime> = {
  component: RemainingTime,
  title: "Alert/RemainingTime",
  parameters: {
    layout: "centered",
  },

  argTypes: {},
};

type Story = StoryObj<typeof meta>;

export const Alert: Story = {
  args: {},
};

export default meta;
