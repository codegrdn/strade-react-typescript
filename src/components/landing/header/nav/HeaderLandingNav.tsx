import { FC, useContext } from 'react';
import { LandingContext } from '../../context/LandingContext';
import NavItem from './item/NavItem';

interface HeaderLandingNavProps {

}

const HeaderLandingNav: FC<HeaderLandingNavProps> = () => {
    const { menuMobile } = useContext(LandingContext);

    return (
        <>
            <nav className={"header__menu menu" + (menuMobile.menuMobile ? " menu--active" : "")}>
                <NavItem />
            </nav>

            <a className="menu__btn btn btn--green js-modal-open" href="#!" data-modal="modal-2">Create Account</a>

            <button
                className={"menu__toggle" + (menuMobile.menuMobile ? " menu__toggle--active" : "")} 
                type="button" 
                onClick={menuMobile.toggleMenuMobile}
            >
                <span className="menu__toggle-line"></span>
            </button>
        </>
        
    )
}

export default HeaderLandingNav;