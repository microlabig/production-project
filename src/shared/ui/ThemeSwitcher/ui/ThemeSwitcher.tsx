import { useTheme } from "shared/providers/theme-provider";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/Button";

type TThemeSwitcherProps = {
  className?: string;
};

export function ThemeSwitcher(props: TThemeSwitcherProps) {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <DarkIcon
        className={classNames(cls.ThemeSwitcherIcon, {}, [cls[theme]])}
      />
    </Button>
  );
}
