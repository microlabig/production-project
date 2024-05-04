import type { Meta, StoryObj } from '@storybook/react';

import { MainLayout } from './MainLayout';

const meta = {
    title: 'shared/layouts/MainLayout',
    component: MainLayout,
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
