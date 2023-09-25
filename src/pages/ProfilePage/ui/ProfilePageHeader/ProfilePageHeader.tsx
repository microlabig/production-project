import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

type TProfilePageHeaderProps = {
    readonly?: boolean;
    className?: string;
};

export const ProfilePageHeader = (props: TProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

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
        <div className={classNames(cls.ProfilePageHeader, {}, [props.className])}>
            <Text title={t('Профиль')} />

            {props.readonly ? (
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn} onClick={onEdit}>
                    {t('Редактировать')}
                </Button>
            ) : (
                <div className={cls.buttons}>
                    <Button theme={ButtonTheme.OUTLINE_RED} className={cls.saveBtn} onClick={onEditCancel}>
                        {t('Отменить')}
                    </Button>
                    <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn} onClick={onSave}>
                        {t('Сохранить')}
                    </Button>
                </div>
            )}
        </div>
    );
};
