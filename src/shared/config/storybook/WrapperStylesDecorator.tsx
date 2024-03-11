import { CSSProperties } from 'react';

import { StoryFn } from '@storybook/react';

export const WrapperStylesDecorator = (styles: CSSProperties) => (Story: StoryFn) =>
    (
        <div style={styles}>
            <Story />
        </div>
    );

export const WrapperCenteredDecorator = (Story: StoryFn) => (
    <div
        style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Story />
    </div>
);
