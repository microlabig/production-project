import { profileReducer } from 'entities/Profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const initialReducers: ReducersList = {
    profile: profileReducer,
};

function ProfilePage() {
    const { t } = useTranslation('main');

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames('', {}, [])}>{t('PROFILE PAGE')}</div>
        </DynamicModuleLoader>
    );
}

export default memo(ProfilePage);
