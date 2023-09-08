import type { Meta, StoryObj } from '@storybook/react';

import { PageLoader } from './PageLoader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/providers/theme-provider';

const meta = {
    title: 'widget/PageLoader',
    component: PageLoader,
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const DARK: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
