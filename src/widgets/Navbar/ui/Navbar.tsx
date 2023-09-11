import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface TNavbarProps {
    className?: string;
}

export function Navbar(props: TNavbarProps) {
    return (
        <header className={classNames(cls.navbar, {}, [props.className])}>
            <nav className={cls.links}>
                /
            </nav>
        </header>
    );
}
