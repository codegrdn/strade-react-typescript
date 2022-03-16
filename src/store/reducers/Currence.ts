enum CurrenceActionTypes {
    CHANGE_CURRENCE = 'CHANGE_CURRENCE',
}

interface CurrenceState {
    currence: string,
}

interface CurrenceAction {
    type: string,
    payload?: any
}

const defaultState: CurrenceState = {
    currence: 'usd',
};


export const currenceReducer = (state = defaultState, action: CurrenceAction): CurrenceState => {
    switch (action.type) {
        case CurrenceActionTypes.CHANGE_CURRENCE:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export const changeCurrenceAction = (payload: CurrenceState): CurrenceAction => ({type: CurrenceActionTypes.CHANGE_CURRENCE, payload})