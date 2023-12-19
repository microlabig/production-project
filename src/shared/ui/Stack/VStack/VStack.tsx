import { memo } from 'react';

import { Flex, TFlexProps } from '../Flex/Flex';

type TVStackProps = Omit<TFlexProps, 'direction'>;

export const VStack = memo((props: TVStackProps) => {
    const { align = 'start' } = props;

    return <Flex {...props} direction="column" align={align} />;
});
