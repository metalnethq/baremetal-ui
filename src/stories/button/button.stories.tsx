import { Meta, StoryObj } from "@storybook/react";
import Button from "../../lib/components/button";
import "../../index.css";
import React from "react";

const LoadingIconComp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    data-slot="icon"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
);

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button/Basic",
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
    className: {
      control: {
        type: "text",
      },
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
      description: "Visual intent",
    },
    selfAlign: {
      control: {
        type: "select",
        options: ["start", "center", "end", "stretch", "auto"],
      },
      description: "Self alignment",
    },
    rounded: {
      control: {
        type: "select",
        options: ["none", "sm", "md", "lg", "xl", "2xl", "full"],
      },
      description: "Rounded corners",
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "lg", "xl", "2xl"],
      },
      description: "Button size",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      description: "Disabled state",
    },
    loading: {
      control: {
        type: "boolean",
      },
      description: "Loading state",
    },
    bold: {
      control: {
        type: "boolean",
      },
      description: "Bold text",
    },
    reverseItems: {
      control: {
        type: "boolean",
      },
      description: "Reverse items",
    },
    onClick: {
      action: "clicked",
      control: {
        disable: true,
      },
    },
    borderStyle: {
      control: {
        type: "select",
        options: ["none", "dashed", "dotted", "solid", "double"],
      },
      description: "Dashed border",
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
      description: "Full width",
    },
  },
};

export const Basic: StoryObj<typeof meta> = {
  args: {
    children: "Click me",
  },
};

/**
 * You can use reverseItems prop to reverse the order of the icon and text.
 */
export const LoadingIcon: StoryObj<typeof meta> = {
  args: {
    children: "Loading...",
    loading: true,
    loadingIcon: <LoadingIconComp />,
  },
};

export const ReverseItems: StoryObj<typeof meta> = {
  args: {
    children: "Click me",
    reverseItems: true,
    loading: true,
    loadingIcon: <LoadingIconComp />,
  },
};

export const DoubleStyle: StoryObj<typeof meta> = {
  args: {
    children: "Click me",
    borderStyle: "double",
  },
};

export const DashedStyle: StoryObj<typeof meta> = {
  args: {
    children: "Click me",
    borderStyle: "dashed",
  },
};

export const SolidStyle: StoryObj<typeof meta> = {
  args: {
    children: "Click me",
    borderStyle: "solid",
  },
};

export const DottedStyle: StoryObj<typeof meta> = {
  args: {
    children: "Click me",
    borderStyle: "dotted",
  },
};

export const Bold: StoryObj<typeof meta> = {
  args: {
    children: "Click me",
    bold: true,
  },
};

export default meta;
