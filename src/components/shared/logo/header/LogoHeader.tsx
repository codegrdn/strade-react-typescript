import React, { FC } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import logoText from '../images/logo-text.svg';

interface LogoProps {

}

const Logo: FC<LogoProps> = () => {
    return (
        <Link className="dashboard-header__logo logo" to="/" aria-label="logo">
            <img className="logo__icon" src={logo} alt="" width="32" height="27" />
            <img className="dashboard-header__logo-text" src={logoText} alt="" width="52" height="11" />
        </Link>
    )
}

export default Logo;