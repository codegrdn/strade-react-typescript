import React, { FC, useContext } from 'react';
import NavWrapLanguage from '../wrap-language/NavWrapLanguage';
import NavItem from '../item/NavItem';
import { SwapContext } from '../../../context/SwapContext';

interface NavProps {
    
}

const Nav: FC<NavProps> = () => {
    const { menuMobile } = useContext(SwapContext);

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