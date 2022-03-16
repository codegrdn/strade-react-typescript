import { FC } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../shared/logo/images/logo.svg';
import logoText from '../../../shared/logo/images/logo-text.svg';

interface HeaderLogoProps {

}

const HeaderLogo: FC<HeaderLogoProps> = () => {
    return (
        <Link className="header__logo logo" to="/" aria-label="logo">
            <img className="logo__icon" src={logo} alt="" width="32" height="27" />
            <img className="logo__text" src={logoText} alt="" width="52" height="11" />
        </Link>
    )
}

export default HeaderLogo;