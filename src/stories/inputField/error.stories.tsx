import { StoryObj, Meta } from "@storybook/react";
import Error from "../../lib/components/inputField/error";
import React from "react";
import "../../index.css";

const meta: Meta<typeof Error> = {
  component: Error,
  title: "Inputfield/elements/Error",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "The size of the error",
      options: ["xs", "sm", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
      control: { type: "radio" },
      defaultValue: "sm",
    },
    children: {
      description: "The content of the error",
      defaultValue: "This field is required.",
    },
    intent: {
      description: "The intent of the error",
      options: ["danger", "warning", "success"],
      control: { type: "radio" },
      defaultValue: "danger",
    },
  },
};

type Story = StoryObj<typeof Error>;

export const ErrorStory: Story = {
  args: {
    size: "sm",
    children: (
      <ul>
        <li>This field is required.</li>
        <li>This is another error.</li>
      </ul>
    ),
  },
};

export default meta;
