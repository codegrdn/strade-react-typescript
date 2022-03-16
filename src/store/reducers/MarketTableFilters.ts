import ICoin from "../../types/ICoin";

enum MarketTableFiltersActionTypes {
    CLEAR_FILTER_MARKET_TABLE = 'CLEAR_FILTER_MARKET_TABLE',
    ADD_FILTER_MARKET_TABLE = 'ADD_FILTER_MARKET_TABLE',
}

export enum MarketTableFiltersKeyTypes {
    category = 'category',
    search = 'search',
    platform = 'platform',
    coins = 'coins',
    lastPrice = 'lastPrice',
}

interface MarketTableFiltersState {
    category?: string,
    search?: string,
    platform?: string,
    coins?: ICoin[],
    lastPrice?: string,
}

interface MarketTableFiltersForClear {
    key: MarketTableFiltersKeyTypes,
}

interface MarketTableFiltersAction {
    type: MarketTableFiltersActionTypes,
    payload?: MarketTableFiltersState | MarketTableFiltersForClear
}

const defaultState:MarketTableFiltersState = {};

export const marketTableFiltersReducer = (state:MarketTableFiltersState = defaultState, action: MarketTableFiltersAction) => {  
    switch (action.type) {
        case MarketTableFiltersActionTypes.CLEAR_FILTER_MARKET_TABLE:
            return {...state};
        case MarketTableFiltersActionTypes.ADD_FILTER_MARKET_TABLE:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export const clearFilterMarketTableAction = (payload: MarketTableFiltersForClear) : MarketTableFiltersAction => ({type: MarketTableFiltersActionTypes.CLEAR_FILTER_MARKET_TABLE, payload})
export const addFilterMarketTableAction = (payload: MarketTableFiltersState) : MarketTableFiltersAction => ({type: MarketTableFiltersActionTypes.ADD_FILTER_MARKET_TABLE, payload})