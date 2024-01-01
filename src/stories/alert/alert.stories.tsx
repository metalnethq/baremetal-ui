import { Meta, StoryObj } from '@storybook/react';
import Alert from '../../lib/components/alerts';
import "../../index.css";

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
  },
}


type Story = StoryObj<typeof Alert>;

export const Default: Story = {


}

export default meta;
