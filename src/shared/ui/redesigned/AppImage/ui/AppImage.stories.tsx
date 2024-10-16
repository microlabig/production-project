import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../../Icon';
import { Skeleton } from '../../Skeleton';

import { AppImage } from './AppImage';

import UserFilledIcon from '@/shared/assets/icons/user-filled.svg';

const meta = {
    title: 'shared/AppImage',
    component: AppImage,
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalWithError: Story = {
    args: {
        errorFallback: <Icon width={150} height={150} Svg={UserFilledIcon} />,
    },
};

export const NormalWithFallback: Story = {
    args: {
        fallback: <Skeleton width={150} height={150} border="50%" />,
    },
};
