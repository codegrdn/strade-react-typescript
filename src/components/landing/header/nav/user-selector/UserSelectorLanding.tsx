import { FC, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../../global/auth/context/AuthContext';
import account from './img/account.svg'

interface UserSelectorLandingProps {
    
}

const UserSelectorLanding: FC<UserSelectorLandingProps> = () => {
    const { auth } = useContext(AuthContext);
    const { t } = useTranslation();

    const [isActive, setIsActive] = useState<boolean>(false);
    function hanleLogOut(e: any) {
        e.preventDefault();

        auth.logout();
    }

    function hanleShowMenu(e: any) {
        setIsActive(!isActive);
    }

    return (
        <div className={"landing-header__user-dropdown dropdown-menu landing-header__user-dropdown " + (isActive ? 'dropdown-menu--active' : '')}>
            <div className="dropdown-menu__user-info" onClick={hanleShowMenu}>
                <img className="dropdown-menu__user-icon" src={account} width="48" height="48" alt="Account" />
                <div className=  "dropdown-menu__user-name">{ auth.user?.email }<i className="arrow down arrow-landing"></i></div>
            </div>
            <div className="dropdown-menu__menu">
                <div className="dropdown-menu__menu-list landing-menu__menu-list">
                    <a className="dropdown-menu__menu-item" href="#!" onClick={hanleLogOut}>{ t('menu.Logout') }</a>
                </div>
            </div> 
        </div>
    )
}

export default UserSelectorLanding;