import { defaultLanguage } from '../../helpers/language';

enum LanguageActionTypes {
    CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
}

interface LanguageState {
    language: string,
}

interface LanguageAction {
    type: string,
    payload?: any
}

const defaultState: LanguageState = {
    language: defaultLanguage,
};

const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const languageReducer = (state = defaultState, action: LanguageAction): LanguageState => {
    switch (action.type) {
        case LanguageActionTypes.CHANGE_LANGUAGE:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export const changeLanguageAction = (payload: LanguageState): LanguageAction => ({type: CHANGE_LANGUAGE, payload})