import { FC, useContext } from 'react';
import { AuthContext } from '../../../global/auth/context/AuthContext';
import Logo from "../../../shared/logo/header/LogoHeader";
import UserSelectorAdmin from '../../../shared/user-selector/UserSelectorAdmin';
import { SwapContext } from '../../context/SwapContext';
import Nav from "../nav/nav/Nav";

interface HeaderAdminProps {

}

const HeaderAdmin: FC<HeaderAdminProps> = () => {
    const { auth } = useContext(AuthContext);
    const { menuMobile } = useContext(SwapContext);

    return (
        <header className="page-header dashboard-header">
            <div className="dashboard-header__content">
                <Logo />
            
                <div className="dashboard-header__nav">
                    <Nav />

                    {
                        auth.isAuth() 
                        ?
                            <div className="dashboard-header__user-menu-wrap">
                                <div className="dashboard-header__notify"></div>
                                <UserSelectorAdmin />
                            </div>
                        : ''
                    }

                    <button 
                        className="dashboard-header__menu-toggle" 
                        type="button" 
                        aria-label="mobile-menu"
                        onClick={menuMobile.toggleMenuMobile}
                    >
                        <span className="dashboard-header__menu-toggle-line">
                            <svg 
                                className="dashboard-header__menu-toggle-icon" 
                                width="20" 
                                height="20"
                            >
                                <use xlinkHref="#menu-icon"></use>
                            </svg>
                        </span>
                    </button>

                </div>
            </div>
        </header>
    )
}

export default HeaderAdmin;