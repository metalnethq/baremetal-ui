import { Meta, StoryObj } from "@storybook/react";
import Component from "../../lib/components/inputField/label";
import "../../index.css";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Inputfield/elements/Label",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "The size of the label",
      options: ["xs", "sm", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
      control: { type: "radio" },
      defaultValue: "sm",
    },
    bold: {
      description: "Whether to bold the label or not",
      defaultValue: false,
    },
    htmlFor: {
      description: "The id of the input this label is for",
      defaultValue: "input",
    },
    children: {
      description: "The content of the label",
      defaultValue: "First Name",
    },
  },
};

type Story = StoryObj<typeof Component>;

export const Label: Story = {
  args: {
    size: "sm",
    bold: false,
    htmlFor: "input",
    children: "First Name",
  },
};

export default meta;
