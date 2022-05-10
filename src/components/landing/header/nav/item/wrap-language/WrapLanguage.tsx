import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import SelectLanguage from '../../../../../shared/select/language/SelectLanguage';
import { LandingContext } from '../../../../context/LandingContext';

interface WrapLanguageProps {

}

const WrapLanguage: FC<WrapLanguageProps> = () => {
    const { t } = useTranslation();
    // const {loginModal} = useContext(LandingContext);
    
    function handlerClickLogin(e: React.MouseEvent) {
        e.preventDefault();

        // loginModal.toggleModal();
    }

    return (
        <div className="menu__item-wrap">
            <li className="menu__item">
                <SelectLanguage />
            </li>

            <li className="menu__item">
                <a className="menu__link" onClick={handlerClickLogin} >{ t('menu.Login') }</a>
            </li>
        </div>
    )
}

export default WrapLanguage;