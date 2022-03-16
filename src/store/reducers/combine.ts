import { combineReducers } from "redux";
import { languageReducer } from "./Language";
import { currenceReducer } from "./Currence";
import { coinsReducer } from "./Coins";
import { plaformsReducer } from "./CoinPlatforms";
import { marketTableFiltersReducer } from "./MarketTableFilters";

export const rootReducer = combineReducers({
    language: languageReducer,
    currence: currenceReducer,
    coins: coinsReducer,
    platforms: plaformsReducer,
    filters: marketTableFiltersReducer
});

export type StoreState = ReturnType<typeof rootReducer>