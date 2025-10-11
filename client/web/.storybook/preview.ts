import type { Preview } from '@storybook/react-vite';
import '../src/index.css';
const preview: Preview = {
    tags: ['autodocs'],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            test: 'todo'
        }
    },
};

export default preview;