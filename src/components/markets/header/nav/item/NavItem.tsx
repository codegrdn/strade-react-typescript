import { FC } from 'react';
import { notShowMenu, routes } from '../../../../../route/routes';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

interface NavItemProps {

}

const NavItem: FC<NavItemProps> = () => {
    const { t } = useTranslation();
    const routesShowing = routes.filter((item) => !notShowMenu.includes(item.title));

    return (
        <div className="dashboard-header__menu-item-wrap">
            {
                routesShowing.map((route, i) => (
                    <div className="dashboard-header__menu-item" key={route.title}>
                        <Link className="dashboard-header__menu-link" to={route.path}>{t(`menu.${route.title}`)}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default NavItem;