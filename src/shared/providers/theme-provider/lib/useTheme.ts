import { useContext } from 'react';
import { Theme, ThemeContext } from '../ui/ThemeProvider';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme = Theme.LIGHT, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme = Theme.LIGHT;

        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.ORANGE;
                break;
            case Theme.ORANGE:
                newTheme = Theme.LIGHT;
                break;
            default:
                break;
        }

        setTheme?.(newTheme);
    };

    return { theme, toggleTheme };
}
