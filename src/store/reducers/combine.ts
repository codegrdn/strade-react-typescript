import { combineReducers } from "redux";
import { languageReducer } from "./Language";
import { currencyReducer } from "./Currency";
import { coinsReducer } from "./Coins";
import { plaformsReducer } from "./CoinPlatforms";
import { marketTableFiltersReducer } from "./MarketTableFilters";

export const rootReducer = combineReducers({
    language: languageReducer,
    currency: currencyReducer,
    coins: coinsReducer,
    platforms: plaformsReducer,
    filters: marketTableFiltersReducer
});

export type StoreState = ReturnType<typeof rootReducer>