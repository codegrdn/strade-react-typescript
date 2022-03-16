import { FC } from 'react';
import routes from '../../../../../route/routes';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import WrapLanguage from './wrap-language/WrapLanguage';

interface NavItemLandingProps {

}

const NavItemLanding: FC<NavItemLandingProps> = () => {
    const { t } = useTranslation();
    const routesShowing = routes.filter((item) => item.title !== 'Home');

    return (
        <ul className="menu__list">
            <li className='menu__title'>Menu</li>
            <div className='menu__item-wrap text-transform-uppercase'>
                {
                    routesShowing.map((route, i) => (
                        <li className="menu__item" key={route.title}>
                            <Link className="menu__link" to={route.path}>{ t(`menu.${route.title}`) }</Link>
                        </li>
                    ))
                }

                <WrapLanguage />
            </div>
        </ul>
    )
}

export default NavItemLanding;