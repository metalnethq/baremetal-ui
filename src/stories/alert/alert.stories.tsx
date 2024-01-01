import { Meta, StoryObj } from '@storybook/react';
import Alert from '../../lib/components/alerts';
import "../../index.css";

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'danger',
          'warning',
          'success',
          'info',
          'light',
          'dark',
        ],
      },
      description: 'Visual intent',
    },
  },
}


type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: "This is an alert",
  }
}

export default meta;
