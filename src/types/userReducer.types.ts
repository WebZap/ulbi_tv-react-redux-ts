export const enum ActionTypes {
    FETCHING_USER = 'FETCHING_USER',
    FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS',
    FETCHING_USER_ERROR = 'FETCHING_USER_ERROR'
}

export interface UserState {
    users: [];
    loading: boolean;
    errors: string | null;
}


interface FetchUser {
    type: ActionTypes.FETCHING_USER;
}

interface FetchUserSuccess {
    type: ActionTypes.FETCHING_USER_SUCCESS;
    payload: [];
}

interface FetchUserError {
    type: ActionTypes.FETCHING_USER_ERROR;
    payload: string | null;
}

export type ActionUser = FetchUser | FetchUserSuccess | FetchUserError


