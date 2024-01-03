import { Meta, StoryObj } from '@storybook/react';
import Alert from '../../lib/components/alert';
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
    rounded: {
      control: {
        type: 'select',
        options: [
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          '2xl',
          '3xl',
          'full',
        ],
      },
      description: 'Roundedness',
    },

    style: {
      control: {
        type: 'select',
        options: [
          'light',
          'normal',
          'bold',
        ],
      },
      description: 'Style',
    },

  },
}


type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: "This is an alert",
  }
}

export const Primary: Story = {
  args: {
    children: "This is an alert",
    intent: 'primary',
    autoDissmissTime: 3000,
  }
}
export default meta;
