import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface TNavbarProps {
    className?: string;
}

export function Navbar(props: TNavbarProps) {
    const { t } = useTranslation();

    return (
        <header className={classNames(cls.navbar, {}, [props.className])}>
            <nav className={cls.links}>
                /
            </nav>
        </header>
    );
}
