import ISelect from "../types/ISelect";

const supportLanguages: string[] = ['en', 'ru'];

export const defaultLanguage: string = 'en';

export const getLanguageByUrl = (url: string) => {
    const pathsUrl = url.split('/');
    return supportLanguages.includes(pathsUrl[0]) ? pathsUrl[0] : defaultLanguage;
}

export const getLanguageByWord = (value: string) => {
    switch (value) {
        case 'english':
            return 'en';
        case 'russian':
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
        label: 'Russian',
    },
];

export const getDefaultSelectLanguage: any = (language: string): ISelect => {
    return selectLanguage.filter((item) => (item.value === language))[0];
}