import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../Button/Button';

import { Popover } from './Popover';

const meta = {
    title: 'deprecated/shared/Popover',
    component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        trigger: <Button>Open</Button>,
        children: <div>123</div>,
    },
};
