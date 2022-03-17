import { defaultCurrency } from '../../helpers/currencies';

enum CurrencyActionTypes {
    CHANGE_CURRENCE = 'CHANGE_CURRENCE',
}

interface CurrencyState {
    currency: string,
}

interface CurrencyAction {
    type: string,
    payload?: any
}

const defaultState: CurrencyState = {
    currency: defaultCurrency,
};


export const currencyReducer = (state = defaultState, action: CurrencyAction): CurrencyState => {
    switch (action.type) {
        case CurrencyActionTypes.CHANGE_CURRENCE:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export const changeCurrencyAction = (payload: CurrencyState): CurrencyAction => ({type: CurrencyActionTypes.CHANGE_CURRENCE, payload})