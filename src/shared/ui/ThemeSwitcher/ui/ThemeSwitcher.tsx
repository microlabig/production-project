import { useTheme } from 'shared/providers/theme-provider';
import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface TThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher(props: TThemeSwitcherProps) {
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
}
