import type { Meta, StoryObj } from '@storybook/react-vite';
import LinkList from './LinkList';
const meta = {
    component: LinkList,
} satisfies Meta<typeof LinkList>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        items: {
            'Node JS': 'https://nodejs.org/en/download',
            'Docker': 'https://nodejs.org/en/download',
            'Github': 'https://nodejs.org/en/download',
            'Ngrok': 'https://nodejs.org/en/download',
        }
    }
}