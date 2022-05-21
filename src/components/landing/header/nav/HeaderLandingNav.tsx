import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../global/auth/context/AuthContext';
import { LandingContext } from '../../context/LandingContext';
import NavItem from './item/NavItem';
import UserSelectorLanding from './user-selector/UserSelectorLanding';

interface HeaderLandingNavProps {

}

const HeaderLandingNav: FC<HeaderLandingNavProps> = () => {
    const { auth } = useContext(AuthContext);
    const { t } = useTranslation();
    const { menuMobile, createModal } = useContext(LandingContext);
    
    function handlerCreateAccount(e: any) {
        e.preventDefault();
        createModal.toggleModal();
    }

    return (
        <>
            <nav className={"header__menu menu" + (menuMobile.menuMobile ? " menu--active" : "")}>
                <NavItem />
            </nav>

            {
                auth.isAuth() 
                ?
                    <div className="landing-header__user-menu-wrap">
                        <div className="landing-header__notify"></div>
                        <UserSelectorLanding />
                    </div>
                : ''
            }

            {
                !auth.isAuth() 
                && <a 
                    className="menu__btn btn btn--green js-modal-open" 
                    href="#!" 
                    data-modal="modal-2" 
                    onClick={handlerCreateAccount}>
                        { t('menu.CreateAccount') }
                    </a>
            }

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