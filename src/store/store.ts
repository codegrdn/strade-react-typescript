import { createStore } from "redux";
import { rootReducer } from "./reducers/combine";

export const store = createStore(rootReducer);