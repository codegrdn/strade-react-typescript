import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import logoText from '../images/logo-text.svg';

interface LogoFooterProps {

}

const LogoFooter: FC<LogoFooterProps> = () => {
    return (
        <Link className="footer__logo logo" to="/" aria-label="logo">
            <img className="footer__logo-icon logo__icon"
                src={logo}
                alt=""
                width="32"
                height="27"
            />

            <img className="footer__logo-text logo__text"
                src={logoText}
                alt=""
                width="50"
                height="10"
            />
        </Link>
    )
}

export default LogoFooter;