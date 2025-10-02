import type { Meta, StoryObj } from '@storybook/react-vite';
import todoImage from '../../../../public/to-do-app.svg';

import Text from '../Typography/Text/Text';
import Card, { CardContent, CardHeader, CardImage } from './Card';
const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <>
      <CardImage src={todoImage} className='h-115' />
      <CardHeader>
        <Text center>Make your Grocery Lists</Text>
      </CardHeader>
      <CardContent>
        <Text center>
          Our app enables you to better setup a grocery list and gives you an estimate of weekly cost based on what food you chose.
        </Text>
      </CardContent>
    </>
  }
};