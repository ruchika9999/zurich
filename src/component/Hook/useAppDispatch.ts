import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../store/configureStore";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
