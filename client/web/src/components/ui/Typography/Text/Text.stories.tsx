import type { Meta, StoryObj } from '@storybook/react-vite';

import Text from './Text';

const meta = {
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Jello',
    className: 'text-sky-950!'
  }
};