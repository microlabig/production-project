import { type FC, ReactNode, useEffect, useMemo, useState } from 'react';

import { LAST_DESIGN_LOCAL_STORAGE_KEY, THEME_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { Theme } from '@/shared/constants/theme';
import { ThemeContext, ThemeContextProps } from '@/shared/lib/context/ThemeContext';

const fallbackTheme = localStorage.getItem(LAST_DESIGN_LOCAL_STORAGE_KEY) as Theme;

interface ThemeProviderPros {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderPros> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || fallbackTheme || Theme.LIGHT);
    const [isThemeInited, setIsThemeInited] = useState(false);

    useEffect(() => {
        if (!isThemeInited && initialTheme) {
            setTheme(initialTheme);
            setIsThemeInited(true);
        }
    }, [initialTheme, isThemeInited]);

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
