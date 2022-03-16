import React, { FC } from 'react';
import Logo from "../../logo/header/LogoHeader";
import Nav from "../../nav/nav/Nav";

interface HeaderAdminProps {

}

const HeaderAdmin: FC<HeaderAdminProps> = () => {
    return (
        <header className="page-header dashboard-header">
            <div className="dashboard-header__content">
                <Logo />
            
                <div className="dashboard-header__nav">
                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default HeaderAdmin;