import type { Meta, StoryObj } from '@storybook/react-vite';

import Content from './Content';

const meta = {
  component: Content,
} satisfies Meta<typeof Content>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};