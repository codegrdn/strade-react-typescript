import { FC } from 'react';
import SelectCurrency from '../../select/currency/SelectСurrency';
import SelectLanguage from '../../select/language/SelectLanguage';

interface NavWrapLanguageProps {

}

const NavWrapLanguage: FC<NavWrapLanguageProps> = () => {
    return (
        <div className="dashboard-header__menu-item-wrap">
            <div className="dashboard-header__menu-item">
                <SelectLanguage />
            </div>
            <div className="dashboard-header__menu-item">
                <SelectCurrency />
            </div>
        </div>
    )
}

export default NavWrapLanguage;