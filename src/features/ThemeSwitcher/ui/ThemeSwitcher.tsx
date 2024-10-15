import { memo } from 'react';

import { saveJsonSettings } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';

import ThemeIcon from '@/shared/assets/icons/theme.svg';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';

interface TThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: TThemeSwitcherProps) => {
    const { className } = props;
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const handleToggleTheme = () => {
        toggleTheme(newTheme => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<Icon Svg={ThemeIcon} clickable onClick={handleToggleTheme} />}
            off={
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={classNames('', {}, [className])}
                    onClick={handleToggleTheme}
                >
                    <IconDeprecated Svg={ThemeIconDeprecated} width={40} height={40} inverted />
                </Button>
            }
        />
    );
});
