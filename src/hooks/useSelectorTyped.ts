import {TypedUseSelectorHook, useSelector} from "react-redux";
import {ReducerType} from "../store";

export const  useSelectorTyped : TypedUseSelectorHook<ReducerType>  = useSelector