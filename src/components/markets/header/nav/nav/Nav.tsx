import { FC, useContext } from 'react';
import NavWrapLanguage from '../wrap-language/NavWrapLanguage';
import NavItem from '../item/NavItem';
import { MarketsContext } from '../../../context/MarketsContext';

interface NavProps {
    
}

const Nav: FC<NavProps> = () => {
    const { menuMobile } = useContext(MarketsContext);

    return (
        <nav className={"header__menu menu" + (menuMobile.menuMobile ? ' dashboard-header__menu--active' : '')}>
            <div className="dashboard-header__menu-list">
                <NavItem />

                <NavWrapLanguage />
            </div>
        </nav>
    )
}

export default Nav;