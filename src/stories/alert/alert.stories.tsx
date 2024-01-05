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

  },
}


type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: "This is an alert",
    visibilityTimeout: 3000,
  }
}



export default meta;
