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
    prefixWrapperClassName: {
      control: "text",
    },
    postfix: {
      control: "text",
    },
    postfixWrapperClassName: {
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
    inputClassName: {
      control: { type: "text" },
    },
    inputWrapperClassName: {
      control: { type: "text" },
    },
    inputWrapperStyle: {
      control: { type: "object" },
    },
    inputStyle: {
      control: { type: "object" },
    },
  },
};

export type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    inputWrapperClassName: "",
    inputClassName: "",
    size: "sm",
  },
};

export const Prefix: Story = {
  args: {
    prefix: "https://",
    prefixWrapperClassName: "text-gray-500 left-2",
    postfix: ".com",
    postfixWrapperClassName: "text-gray-500",
    inputClassName: "pl-14 pr-10",
    inputWrapperClassName: "",
    size: "sm",
  },
};

export default meta;
