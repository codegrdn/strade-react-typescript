import { useSelector, TypedUseSelectorHook } from "react-redux";
import { StoreState } from "../store/reducers/combine";

export const useTypedSelector: TypedUseSelectorHook<StoreState> = useSelector