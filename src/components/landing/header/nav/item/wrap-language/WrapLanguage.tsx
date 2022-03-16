import { FC } from 'react';
import SelectLanguage from '../../../../../shared/select/language/SelectLanguage';

interface WrapLanguageProps {

}

const WrapLanguage: FC<WrapLanguageProps> = () => {
    return (
        <div className="menu__item-wrap">
            <li className="menu__item">
                <SelectLanguage />
            </li>
        </div>
    )
}

export default WrapLanguage;