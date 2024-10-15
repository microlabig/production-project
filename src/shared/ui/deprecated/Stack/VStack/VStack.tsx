import { memo } from 'react';

import { Flex, TFlexProps } from '../Flex/Flex';

type TVStackProps = Omit<TFlexProps, 'direction'>;

/**
 * Устарел, используем новые компоненты из директории redesigned
 * @deprecated
 */
export const VStack = memo((props: TVStackProps) => {
    const { align = 'start' } = props;

    return <Flex {...props} direction="column" align={align} />;
});
