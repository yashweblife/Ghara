import { PlusIcon } from '@heroicons/react/24/solid';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Add",
  }
};

export const SizeSmall: Story = {
  args: {
    children: "Add",
    size: "small",
  }
}
export const SizeLarge: Story = {
  args: {
    children: "Add",
    size: "large",
  }
}

export const VariantPrimary: Story = {
  args: {
    children: "Add",
    variant: "primary",
  }
}
export const VariantSecondary: Story = {
  args: {
    children: "Add",
    variant: "secondary",
  }
}
export const IconButtonHorizontal: Story = {
  args: {
    children: <><PlusIcon /> Add</>,
    direction: 'horizontal'
  }
}
export const IconButtonVertical: Story = {
  args: {
    direction: 'vertical',
    children: <><PlusIcon />Add</>
  }
}