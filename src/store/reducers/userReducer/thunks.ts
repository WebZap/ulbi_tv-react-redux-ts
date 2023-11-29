import {Dispatch} from "redux";
import {ActionUser} from "../../../types/userReducer.types";
import {fetchUser, fetchUserError, fetchUserSuccess} from "./actions-creators";

export const getUsers = () => {
    return async (dispatch: Dispatch<ActionUser>) => {
        try{
            dispatch(fetchUser());
            const response = await fetch('https://jsonplaceholder.typicode.com/users',{
                method : 'GET'
            })
            const data = await response.json()
            dispatch(fetchUserSuccess(data))
        } catch (e) {
            dispatch(fetchUserError(`ОШИБКА: Данные об ошибке => ${e}`))
        }
    }
}