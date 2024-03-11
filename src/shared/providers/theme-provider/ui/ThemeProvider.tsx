import { type FC, useMemo, useState, useEffect, ReactNode } from 'react';

import { THEME_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { Theme } from '@/shared/constants/theme';
import { ThemeContext, ThemeContextProps } from '@/shared/lib/context/ThemeContext';

const defaultTheme = (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderPros {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderPros> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    useEffect(() => {
        document.body.classList.add(theme);
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);

        return () => {
            document.body.classList.remove(theme);
        };
    }, [theme]);

    const defaultProps: ThemeContextProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
