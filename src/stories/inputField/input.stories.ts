import Component from "../../lib/components/inputField/inputElement";
import { Meta, StoryObj } from "@storybook/react";
import "../../index.css";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Inputfield/elements/Input",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    prefix: {
      control: "text",
    },
    prefixWrapperClasses: {
      control: "text",
    },
    postfix: {
      control: "text",
    },
    postfixWrapperClasses: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    size: {
      options: ["xs", "sm", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
      control: { type: "radio" },
    },
    onChange: { action: "onChange", control: { disable: true } },
    intent: {
      options: ["primary", "error", "warning", "success", "info"],
      control: { type: "radio" },
    },
    inputClasses: {
      control: { type: "text" },
    },
    inputWrapperClasses: {
      control: { type: "text" },
    },
    inputWrapperStyles: {
      control: { type: "object" },
    },
    inputStyles: {
      control: { type: "object" },
    },
  },
};

export type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    inputWrapperClasses: "",
    inputClasses: "",
    size: "sm",
  },
};

export const Prefix: Story = {
  args: {
    prefix: "https://",
    prefixWrapperClasses: "text-gray-500 left-2",
    postfix: ".com",
    postfixWrapperClasses: "text-gray-500",
    inputClasses: "pl-14 pr-10",
    inputWrapperClasses: "",
    size: "sm",
  },
};

export default meta;
