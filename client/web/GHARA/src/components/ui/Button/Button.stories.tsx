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
    text: 'Add'
  }
};

export const SizeSmall: Story = {
  args: {
    size: "sm",
    text: 'Add'
  }
}
export const SizeLarge: Story = {
  args: {
    size: "lg",
    text: 'Add'
  }
}

export const VariantPrimary: Story = {
  args: {
    variant: "primary",
    text: 'Add'
  }
}
export const VariantOutlined: Story = {
  args: {
    variant: "outlined",
    text: 'Add'
  }
}

export const IconButtonLeft: Story = {
  args: {
    icon: <PlusIcon />,
    text: 'Add',
    placement: 'left'
  }
}
export const IconButtonTop: Story = {
  args: {
    placement: 'top',
    icon: <PlusIcon />,
    text: "Add"
  }
}
export const IconButtonRight: Story = {
  args: {
    placement: 'right',
    icon: <PlusIcon />,
    text: "Add"
  }
}
export const IconButtonBottom: Story = {
  args: {
    placement: 'bottom',
    icon: <PlusIcon />,
    text: "Add"
  }
}