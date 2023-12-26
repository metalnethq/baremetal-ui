import React from "react";
import Component, { Body, Heading } from "../../lib/components/card";
import Button from "../../lib/components/button";
import { Meta, StoryObj } from "@storybook/react";
import "../../index.css";
import Text from "../../lib/components/text";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Card/Basic",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    title: {
      control: {
        type: "text",
      },
      description: "Card title",
    },
    actions: {
      control: {
        disable: true,
      },
      description: "Card actions. These will be rendered in the footer",
    },
    actionAlignment: {
      control: {
        type: "select",
        options: ["left", "right", "evenly", "between"],
      },
      description:
        "If you want to align actions in a single container then use this prop. To use this you have to pass `false` to borderedActions prop",
    },
    actionWrapperClassName: {
      control: {
        type: "text",
      },
      description: "Actions ",
    },
    borderedActions: {
      control: {
        type: "boolean",
      },
      description:
        "If you want to align actions in multiple containers, separate from each other using the borders and align them in the middle of each container then use this prop",
    },
    loading: {
      control: {
        type: "boolean",
      },
      description: "If you want to show a loading state",
    },
    width: {
      control: {
        type: "select",
        options: [
          "1/4",
          "1/3",
          "1/2",
          "2/3",
          "3/4",
          "60",
          "64",
          "72",
          "80",
          "96",
          "auto",
          "full",
          "screen",
        ],
      },
      description: "Width of the card",
    },
    minWidth: {
      control: {
        type: "select",
        options: ["full", "min", "max", "fit", "60", "64", "72", "80", "96"],
      },
      description: "Min width of the card",
    },
    maxWidth: {
      control: {
        type: "select",
        options: [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
          "3xl",
          "4xl",
          "5xl",
          "6xl",
          "7xl",
          "full",
          "min",
          "max",
          "fit",
          "prose",
          "none",
          "60",
          "64",
          "72",
          "80",
          "96",
        ],
      },
      description: "Max width of the card",
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "This is title",
    borderedActions: true,
    children: (
      <div className="p-3 text-gray-600 text-sm">
        To actionAlignment to work you have to pass false to borderedActions
        prop.
      </div>
    ),
    actions: [
      ...Array(2)
        .fill(null)
        .map((_, i) => (
          <Button size={"sm"} key={"button_" + i}>
            Button
          </Button>
        )),
    ],
  },
};

/**
 * You can use compound components to create a custom layout.
 * For more info please have a look at custom layout documentation at  <a href="?path=/story/card-basic--custom-layout">Custom Layout</a>
 */
export const CustomLayout: Story = {
  args: {
    children: (
      <Component className="min-w-full">
        <Heading el="h1">
          <Text el="h1">This is a heading</Text>
        </Heading>
        <Body el="div" className="p-3">
          <Text el="p">This is card body</Text>
        </Body>
      </Component>
    ),
  },
};

export default meta;
