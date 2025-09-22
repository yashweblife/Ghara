import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './Button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "add",
  }
};

export const SizeLarge: Story = {
  args: {
    children: "add",
    size: "large",
  }
}
export const SizeSmall: Story = {
  args: {
    children: "add",
    size: "large",
  }
}
export const VariantPrimary: Story = {
  args: {
    children: "add",
    variant: "primary",
  }
}
export const VariantSecondary: Story = {
  args: {
    children: "add",
    variant: "secondary",
  }
}