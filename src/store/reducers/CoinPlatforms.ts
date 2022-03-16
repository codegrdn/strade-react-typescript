enum CoinPlatformsActionTypes {
    ADD_PLATFORMS = 'ADD_PLATFORMS',
}

export interface CoinPlatformsState {
    [coin: string]: string,
}

interface CoinPlatformsAction {
    type: CoinPlatformsActionTypes,
    payload?: any
}

const defaultState: CoinPlatformsState = {
    coin: ''
};

export const plaformsReducer = (state: CoinPlatformsState = defaultState, action: CoinPlatformsAction): CoinPlatformsState => {
    switch (action.type) {
        case CoinPlatformsActionTypes.ADD_PLATFORMS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export const addPlatformsAction = (payload: CoinPlatformsState): CoinPlatformsAction => ({type: CoinPlatformsActionTypes.ADD_PLATFORMS, payload})
