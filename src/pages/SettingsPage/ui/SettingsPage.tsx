import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { UiDesignSwitcher } from '@/features/UiDesignSwitcher';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';

type TSettingsPageProps = {
    className?: string;
};

function SettingsPage(props: TSettingsPageProps) {
    const { t } = useTranslation('settings');
    const { className } = props;

    return (
        <Page>
            <VStack max gap="16">
                <Text title={t('Настройки пользователя')} />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
}

export default memo(SettingsPage);
