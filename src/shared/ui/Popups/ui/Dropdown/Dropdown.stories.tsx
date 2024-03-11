import type { Meta, StoryObj } from '@storybook/react';

import { WrapperCenteredDecorator } from '@/shared/config/storybook/WrapperStylesDecorator';

import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
                disabled: true,
            },
            {
                content: 'three',
            },
        ],
    },
    decorators: [WrapperCenteredDecorator],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const DirectionTopRight: Story = {
    args: {
        direction: 'top right',
    },
};

export const DirectionTopLeft: Story = {
    args: {
        direction: 'top left',
    },
};

export const DirectionBottomRight: Story = {
    args: {
        direction: 'bottom right',
    },
};

export const DirectionBottomLeft: Story = {
    args: {
        direction: 'bottom left',
    },
};
