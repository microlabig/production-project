import { memo } from 'react';

import { Flex, TFlexProps } from '../Flex/Flex';

type THStackProps = Omit<TFlexProps, 'direction'>;

export const HStack = memo((props: THStackProps) => {
    return <Flex {...props} direction="row" />;
});
