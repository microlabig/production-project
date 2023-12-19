import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { profileActions, updateProfileData } from 'entities/Profile';
import { getProfileCanEdit } from 'entities/Profile/';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';

type TProfilePageHeaderProps = {
    readonly?: boolean;
    className?: string;
};

export const ProfilePageHeader = (props: TProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const canEdit = useSelector(getProfileCanEdit);

    const onEdit = () => {
        dispatch(profileActions.setReadOnly(false));
    };

    const onEditCancel = () => {
        dispatch(profileActions.setReadOnly(true));
        dispatch(profileActions.cancelEdit());
    };

    const onSave = () => {
        dispatch(updateProfileData());
        dispatch(profileActions.setReadOnly(true));
    };

    return (
        <HStack max justify="between" className={classNames('', {}, [props.className])}>
            <Text title={t('Профиль')} />

            {canEdit && (
                <div>
                    {props.readonly ? (
                        <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button theme={ButtonTheme.OUTLINE_RED} onClick={onEditCancel}>
                                {t('Отменить')}
                            </Button>
                            <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    );
};
