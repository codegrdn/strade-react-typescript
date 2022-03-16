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
        'value': 'usd',
        'label': 'English / USD',
    },
    {
        'value': 'gbp',
        'label': 'English / GBP',
    },
    {
        'value': 'rub',
        'label': 'Russian / RUB',
    },
];

export const defaultSelectLanguage: ISelect = selectLanguage[0];