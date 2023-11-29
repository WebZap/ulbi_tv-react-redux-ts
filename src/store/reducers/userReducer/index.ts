import {ActionTypes, ActionUser, UserState} from "../../../types/userReducer.types";

const initialState: UserState =  {
    users : [],
    loading: false,
    errors : null
}

export const userReducer = (state = initialState,action: ActionUser ): UserState => {
    switch (action.type){
        case ActionTypes.FETCHING_USER:
            return {
                ...state,
                loading : true
            }
        case ActionTypes.FETCHING_USER_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case ActionTypes.FETCHING_USER_ERROR:
            return {
                ...state,
                errors : action.payload
            }
        default:
            return state
    }
}


