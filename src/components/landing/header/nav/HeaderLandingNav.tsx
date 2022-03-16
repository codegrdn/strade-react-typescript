import { FC } from 'react';
import NavItem from './item/NavItem';

interface HeaderLandingNavProps {

}

const HeaderLandingNav: FC<HeaderLandingNavProps> = () => {
    return (
        <nav className="header__menu menu">
            <NavItem />
        </nav>
    )
}

export default HeaderLandingNav;