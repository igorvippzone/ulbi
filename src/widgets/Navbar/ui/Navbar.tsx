import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const text = '/';
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                {text}
            </div>
        </div>
    );
};
