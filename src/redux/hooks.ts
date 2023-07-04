import type { Action, ThunkAction } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "./store";

export const useAppDispatch = () =>
  useDispatch<
    AppDispatch | ThunkAction<void, RootState, unknown, Action<string>>
  >();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
