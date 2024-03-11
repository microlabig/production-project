import { memo } from 'react';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface TThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: TThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            <DarkIcon className={classNames(cls.ThemeSwitcherIcon, {}, [cls[theme]])} />
        </Button>
    );
});
