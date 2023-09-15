import { type FC, createContext, useMemo, useState, useEffect } from 'react';
import { THEME_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage';

export enum Theme {
    LIGHT = 'app-light-theme',
    DARK = 'app-dark-theme',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

const defaultTheme = (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderPros {
    initialTheme?: Theme;
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
