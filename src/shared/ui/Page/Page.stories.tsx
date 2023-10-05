import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';
import { Text } from '../Text/Text';

const meta = {
    title: 'shared/Page',
    component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: <Text text="text" />,
    },
};
