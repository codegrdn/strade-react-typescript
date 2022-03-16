import ICoin from "../../types/ICoin";

enum CoinsActionTypes {
    ADD_COIN = 'ADD_COIN',
    REMOVE_COIN = 'REMOVE_COIN',
}

interface CoinsAction {
    type: string,
    payload?: any
}

const defaultState: ICoin[] | [] = [];

export const coinsReducer = (state = defaultState, action: CoinsAction): ICoin[] | [] => {
    switch (action.type) {
        case CoinsActionTypes.ADD_COIN:
            return [...state, action.payload];
        case CoinsActionTypes.REMOVE_COIN:
            return state.filter(coin => coin.id !== action.payload.id);
        default:
            return state;
    }
}

export const addCoinAction = (payload: ICoin): CoinsAction => ({type: CoinsActionTypes.ADD_COIN, payload})
export const removeCoinAction = (payload: ICoin): CoinsAction => ({type: CoinsActionTypes.REMOVE_COIN, payload})