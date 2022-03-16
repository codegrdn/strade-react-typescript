import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { getLanguageByWord, selectLanguage, defaultSelectLanguage } from '../../../../helpers/language';
import SelectCore from '../core/SelectCore';
import { changeLanguageAction } from "../../../../store/reducers/Language";
import { changeCurrenceAction } from "../../../../store/reducers/Currence";

interface SelectLanguageProps {

}

const SelectLanguage: FC<SelectLanguageProps> = () => {
    const dispatch = useDispatch();
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(defaultSelectLanguage);

    function handlerFilterMarket(e: any): void {
        let label = e.label.split('/');

        if (i18n.language !== label[0].toLowerCase().trim()) {
            i18n.changeLanguage(getLanguageByWord(label[0].toLowerCase().trim()));
        }

        dispatch(changeLanguageAction({language: getLanguageByWord(label[0].toLowerCase().trim()) }))
        dispatch(changeCurrenceAction({currence: label[1].toLowerCase().trim()}))

        setSelectedLanguage(e);
    }

    return <SelectCore values={selectLanguage} selected={selectedLanguage} onChange={handlerFilterMarket} />;
}

export default SelectLanguage;