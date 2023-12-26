import Form from "../../lib/components/form";
import { Meta, StoryObj } from "@storybook/react";
import {
  InputField,
  Label,
  InputElement,
  Error,
} from "../../lib/components/inputField";
import React from "react";
import Button from "../../lib/components/button";
import "../../index.css";

const meta: Meta = {
  title: "Form/Basic",
  component: Form,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "submit" },
    layout: {
      control: {
        type: "select",
        options: ["inline", "stacked"],
      },
      description: "Layout of the form",
    },
  },
};

type Story = StoryObj<typeof Form>;

// eslint-disable-next-line
let error: string[] = [];

export const Basic: Story = {
  args: {
    children: (
      <>
        <InputField>
          <Label htmlFor="basic_firstName">First Name</Label>
          <InputElement id="basic_firstName" name="basic_firstName" />
          {error && <Error>{error}</Error>}
        </InputField>

        <InputField className="mt-3">
          <Label htmlFor="basic_lastName">Last Name</Label>
          <InputElement id="basic_lastName" name="basic_lastName" />
          {error && <Error>{error}</Error>}
        </InputField>

        <Button type="submit" className="mt-3" selfAlign="auto">
          Submit
        </Button>
      </>
    ),
  },
};

export const Inline: Story = {
  args: {
    children: (
      <>
        <InputField>
          <Label htmlFor="inline_firstName">First Name</Label>
          <InputElement id="inline_firstName" name="inline_firstName" />
          {error && <Error>{error}</Error>}
        </InputField>

        <InputField className="ml-3">
          <Label htmlFor="inline_lastName">Last Name</Label>
          <InputElement id="inline_lastName" name="inline_lastName" />
          {error && <Error>{error}</Error>}
        </InputField>

        <Button type="submit" className="ml-3 py-1.5 mb-0.5" selfAlign="end">
          Submit
        </Button>
      </>
    ),
    layout: "inline",
  },
};

export default meta;
