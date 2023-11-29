import {ActionTypes, ActionUser} from "../../../types/userReducer.types";

export const fetchUser = ():ActionUser => {
    return {
        type : ActionTypes.FETCHING_USER
    }
}

export const fetchUserSuccess = (data:[]):ActionUser => {
    return {
        type: ActionTypes.FETCHING_USER_SUCCESS,
        payload: data
    }
}

export const fetchUserError = (data:string):ActionUser => {
    return {
        type : ActionTypes.FETCHING_USER_ERROR,
        payload : data
    }
}