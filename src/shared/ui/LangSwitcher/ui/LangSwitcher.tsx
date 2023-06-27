import { useTranslation } from "react-i18next";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button";

type TLangSwitcherProps = {
  className?: string;
};

export function LangSwitcher(props: TLangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames(cls.LangSwitcher, {}, [props.className])}
    >
      {t("Язык")}
    </Button>
  );
}