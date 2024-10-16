import type { Meta, StoryObj } from '@storybook/react';

import { WrapperCenteredDecorator } from '@/shared/config/storybook/WrapperStylesDecorator';

import { ListBox } from './ListBox';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    args: {
        label: 'Выберите значение',
        items: [
            {
                value: '1',
                content: <div>111</div>,
            },
            {
                value: '2',
                content: <div>222</div>,
            },
        ],
    },
    decorators: [WrapperCenteredDecorator],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const Selected: Story = {
    args: {
        value: '1',
    },
};

export const ReadOnly: Story = {
    args: {
        value: '1',
        readonly: true,
    },
};

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
