import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface TLangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo((props: TLangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={toggle} className={classNames('', {}, [props.className])}>
            {t(props.short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
