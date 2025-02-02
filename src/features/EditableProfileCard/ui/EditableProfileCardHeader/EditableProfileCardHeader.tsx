import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { getProfileCanEdit } from '../../model/selectors/getProfileCanEdit/getProfileCanEdit';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

type TEditableProfileCardHeaderProps = {
    className?: string;
};

export const EditableProfileCardHeader = memo((props: TEditableProfileCardHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const readonly = useSelector(getProfileReadonly);

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card max padding="24" border="partial">
                    <HStack max justify="between" className={classNames('', {}, [props.className])}>
                        <Text title={t('Профиль')} />

                        {canEdit && (
                            <div>
                                {readonly ? (
                                    <Button onClick={onEdit} data-testid="EditableProfileCardHeader.EditButton">
                                        {t('Редактировать')}
                                    </Button>
                                ) : (
                                    <HStack gap="8">
                                        <Button
                                            color="error"
                                            onClick={onEditCancel}
                                            data-testid="EditableProfileCardHeader.CancelButton"
                                        >
                                            {t('Отменить')}
                                        </Button>
                                        <Button
                                            onClick={onSave}
                                            color="success"
                                            data-testid="EditableProfileCardHeader.SaveButton"
                                        >
                                            {t('Сохранить')}
                                        </Button>
                                    </HStack>
                                )}
                            </div>
                        )}
                    </HStack>
                </Card>
            }
            off={
                <HStack max justify="between" className={classNames('', {}, [props.className])}>
                    <TextDeprecated title={t('Профиль')} />

                    {canEdit && (
                        <div>
                            {readonly ? (
                                <ButtonDeprecated
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onEdit}
                                    data-testid="EditableProfileCardHeader.EditButton"
                                >
                                    {t('Редактировать')}
                                </ButtonDeprecated>
                            ) : (
                                <HStack gap="8">
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE_RED}
                                        onClick={onEditCancel}
                                        data-testid="EditableProfileCardHeader.CancelButton"
                                    >
                                        {t('Отменить')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onSave}
                                        data-testid="EditableProfileCardHeader.SaveButton"
                                    >
                                        {t('Сохранить')}
                                    </ButtonDeprecated>
                                </HStack>
                            )}
                        </div>
                    )}
                </HStack>
            }
        />
    );
});
