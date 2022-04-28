import ISelect from "../types/ISelect";

const supportLanguages: string[] = ['en', 'ru'];

export const defaultLanguage: string = 'en';

export const getLanguageByUrl = (url: string) => {
    const pathsUrl = url.split('/');
    return supportLanguages.includes(pathsUrl[1]) ? pathsUrl[1] : defaultLanguage;
}

export const useLanguage = getLanguageByUrl(window.location.pathname);

export const getLanguageByWord = (value: string) => {
    switch (value) {
        case 'english':
            return 'en';
        case 'русский':
            return 'ru';
        default: 
            return 'en';    
    }
}

export const selectLanguage: ISelect[] = [
    {
        value: 'en',
        label: 'English',
    },
    {
        value: 'ru',
        label: 'Русский',
    },
];

export const getDefaultSelectLanguage: any = (language: string): ISelect => {
    return selectLanguage.filter((item) => (item.value === language))[0];
}