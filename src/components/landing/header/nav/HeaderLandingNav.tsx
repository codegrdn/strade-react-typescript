import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../global/auth/context/AuthContext';
import UserSelectorAdmin from '../../../shared/user-selector/UserSelectorAdmin';
import { LandingContext } from '../../context/LandingContext';
import NavItem from './item/NavItem';

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
                    <div className="dashboard-header__user-menu-wrap">
                        <div className="dashboard-header__notify"></div>
                        <UserSelectorAdmin />
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