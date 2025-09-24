import type { Meta, StoryObj } from '@storybook/react-vite';
import { FaPlus } from 'react-icons/fa';
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

export const VariantSolid: Story = {
  args: {
    variant: "solid",
    text: 'Add'
  }
}
export const VariantGhost: Story = {
  args: {
    variant: "ghost",
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
    icon: <FaPlus />,
    text: 'Add',
    placement: 'left'
  }
}
export const IconButtonTop: Story = {
  args: {
    icon: <FaPlus />,
    placement: 'top',
    text: "Add"
  }
}
export const IconButtonRight: Story = {
  args: {
    icon: <FaPlus />,
    placement: 'right',
    text: "Add"
  }
}
export const IconButtonBottom: Story = {
  args: {
    icon: <FaPlus />,
    placement: 'bottom',
    text: "Add"
  }
}

export const ButtonRoundedFull: Story = {
  args: {
    rounded: 'full',
    text: "Add",

  }
}