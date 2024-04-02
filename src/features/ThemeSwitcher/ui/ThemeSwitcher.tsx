import { memo } from 'react';

import { saveJsonSettings } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';

import cls from './ThemeSwitcher.module.scss';

interface TThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: TThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const handleToggleTheme = () => {
        toggleTheme(newTheme => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={handleToggleTheme}
        >
            <DarkIcon className={classNames(cls.ThemeSwitcherIcon, {}, [cls[theme]])} />
        </Button>
    );
});
