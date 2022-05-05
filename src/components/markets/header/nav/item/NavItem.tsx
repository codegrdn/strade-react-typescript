import { FC } from 'react';
import { notShowMenu, routes } from '../../../../../route/routes';
import { useTranslation } from "react-i18next";
import { Link, useLocation } from 'react-router-dom';
import { isActiveURL } from '../../../../../helpers/route';

interface NavItemProps {

}

const NavItem: FC<NavItemProps> = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const routesShowing = routes.filter((item) => !notShowMenu.includes(item.title));

    return (
        <div className="dashboard-header__menu-item-wrap">
            {
                routesShowing.map((route, i) => (
                    <div className="dashboard-header__menu-item" key={route.title}>
                        <Link 
                            className={`dashboard-header__menu-link ${isActiveURL(route.path, location.pathname) ? 'dashboard-header__menu-link--active disable-link' : ''}`}
                            to={route.path}
                        >
                            {t(`menu.${route.title}`)}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default NavItem;