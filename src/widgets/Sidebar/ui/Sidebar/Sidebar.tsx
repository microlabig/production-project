import { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import cls from './Sidebar.module.scss';

interface TSidebarProps {
    className?: string;
}

export const Sidebar: FC<TSidebarProps> = props => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [props.className])}
        >
            <Button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
                {t('Toggle')}
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
