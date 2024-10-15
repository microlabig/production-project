import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta = {
    title: 'shared/Flex',
    component: Flex,
    args: {
        children: (
            <>
                <div>one</div>
                <div>two</div>
                <div>three</div>
            </>
        ),
    },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {};

export const RowGap4: Story = {
    args: {
        gap: '4',
    },
};

export const RowGap8: Story = {
    args: {
        gap: '8',
    },
};

export const RowGap16: Story = {
    args: {
        gap: '16',
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
    },
};

export const ColumnGap16: Story = {
    args: {
        direction: 'column',
        gap: '16',
    },
};

export const ColumnGap32: Story = {
    args: {
        direction: 'column',
        gap: '32',
    },
};

export const ColumnAlignEnd: Story = {
    args: {
        direction: 'column',
        align: 'end',
    },
};
