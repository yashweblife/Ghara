import type { Meta, StoryObj } from '@storybook/react-vite';

import Bold from './Bold';

const meta = {
  component: Bold,
} satisfies Meta<typeof Bold>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "text"
  }
};