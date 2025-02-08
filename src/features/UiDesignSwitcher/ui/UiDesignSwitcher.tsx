import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';
import { ListBoxItem } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

type TUiDesignSwitcherProps = {
    className?: string;
};

export const UiDesignSwitcher = memo((props: TUiDesignSwitcherProps) => {
    const { t } = useTranslation('settings');
    const { className } = props;
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);

    const forceUpdate = useForceUpdate();

    const isAppRedesigned = getFeatureFlag('isAppRedesigned');

    const [isLoading, setIsLoading] = useState(false);

    const items: ListBoxItem<string>[] = useMemo(
        () => [
            {
                content: t('Новый'),
                value: 'new',
            },
            {
                content: t('Старый'),
                value: 'old',
            },
        ],
        [t]
    );

    const onChange = async (value: string) => {
        if (!authData) {
            return;
        }
        setIsLoading(true);
        await dispatch(
            updateFeatureFlag({
                userId: authData.id,
                newFeatures: {
                    isAppRedesigned: value === 'new',
                },
            })
        ).unwrap();
        setIsLoading(false);
        forceUpdate();
    };

    return (
        <HStack gap="8">
            <Text text={t('Вариант интерфейса')} />
            {isLoading ? (
                <Skeleton width={100} height={40} />
            ) : (
                <ListBox
                    value={isAppRedesigned ? 'new' : 'old'}
                    items={items}
                    onChange={onChange}
                    className={classNames('', {}, [className])}
                />
            )}
        </HStack>
    );
});
