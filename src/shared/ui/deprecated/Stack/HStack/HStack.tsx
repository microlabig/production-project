import { memo } from 'react';

import { Flex, TFlexProps } from '../Flex/Flex';

type THStackProps = Omit<TFlexProps, 'direction'>;

/**
 * Устарел, используем новые компоненты из директории redesigned
 * @deprecated
 */
export const HStack = memo((props: THStackProps) => {
    return <Flex {...props} direction="row" />;
});
