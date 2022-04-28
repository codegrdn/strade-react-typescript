import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { getLanguageByWord, selectLanguage, getDefaultSelectLanguage, useLanguage } from '../../../../helpers/language';
import SelectCore from '../core/SelectCore';
import { changeLanguageAction } from "../../../../store/reducers/Language";
import { useTypedSelector } from '../../../../hooks/useTypedSelector';

interface SelectLanguageProps {

}

const SelectLanguage: FC<SelectLanguageProps> = () => {
    const dispatch = useDispatch();
    const { i18n } = useTranslation();
    const { language } = useTypedSelector(state => state.language)
    const [selectedLanguage, setSelectedLanguage] = useState(getDefaultSelectLanguage(useLanguage));

    function handlerChangeLanguage(e: any): void {
        if (i18n.language !== e.label.toLowerCase().trim()) {
            if (useLanguage === 'en') {
                window.location.pathname = '/' + getLanguageByWord(e.label.toLowerCase().trim()) + window.location.pathname;
            } else {
                if (getLanguageByWord(e.label.toLowerCase().trim()) === 'en') {
                    window.location.href = window.location.href.replace('/' + useLanguage, '')
                } else {
                    window.location.href = window.location.href.replace(useLanguage, getLanguageByWord(e.label.toLowerCase().trim()));
                }
            }

            i18n.changeLanguage(getLanguageByWord(e.label.toLowerCase().trim()));
        }

        dispatch(changeLanguageAction({language: getLanguageByWord(e.label.toLowerCase().trim()) }))
        setSelectedLanguage(e);
    }

    return <SelectCore values={selectLanguage} selected={selectedLanguage} onChange={handlerChangeLanguage} />;
}

export default SelectLanguage;