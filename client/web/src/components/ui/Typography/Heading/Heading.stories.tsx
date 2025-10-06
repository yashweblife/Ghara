import type { Meta, StoryObj } from '@storybook/react-vite';

import Heading from './Heading';

const meta = {
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello World"
  }
};
export const Variant: Story = {
  args: {
    children: "Hello World",
    variant: 'h2'
  }
};
export const Classes: Story = {
  args: {
    children: "Hello World",
    className: 'hover:text-sky-500'
  }
};