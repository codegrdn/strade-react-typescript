import React, { FC } from 'react';
import NavWrapLanguage from '../wrap-language/NavWrapLanguage';
import NavItem from '../item/NavItem';

interface NavProps {
    
}

const Nav: FC<NavProps> = () => {
    return (
        <nav className="header__menu menu">
            <div className="dashboard-header__menu-list">
                <NavItem />

                <NavWrapLanguage />
            </div>
        </nav>
    )
}

export default Nav;