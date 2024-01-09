import { Meta, StoryObj } from "@storybook/react";
import Alert from "../../lib/components/alert";
import "../../index.css";

const meta: Meta<typeof Alert> = {
  title: "Alert",
  component: Alert,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    visibilityTimeout: {
      control: {
        disable: true,
      },
      description:
        "The number of milliseconds to wait before hiding the alert. If this prop is not provided, the alert will not hide automatically.",
    },
    intent: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "danger",
          "warning",
          "success",
          "info",
          "light",
          "dark",
        ],
      },
      description: "The intent of the alert.",
    },
    alertWeight: {
      control: {
        type: "select",
        options: ["light", "normal", "bold"],
      },
      description: "The weight of the alert.",
    },
    rounded: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl", "2xl", "full"],
      },
      description: "The border radius of the alert.",
    },
  },
};

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: "This is an alert",
  },
};

export default meta;
