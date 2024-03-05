import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Text } from '@/shared/ui/Text/Text';
import { Page } from './Page';

const meta = {
    title: 'widget/Page',
    component: Page,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: <Text text="text" />,
    },
};
