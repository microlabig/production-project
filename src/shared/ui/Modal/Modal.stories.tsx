import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/providers/theme-provider';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem iusto doloribus tempora incidunt,
        deleniti ab nisi, enim minima eius ad recusandae veniam a voluptates impedit architecto aliquid fuga
        laboriosam!`,
    },
};

export const Dark: Story = {
    ...Light,
    decorators: [ThemeDecorator(Theme.DARK)],
};
