import { combineReducers } from "redux";
import { languageReducer } from "./Language";

export const rootReducer = combineReducers({
    language: languageReducer,
});

export type StoreState = ReturnType<typeof rootReducer>