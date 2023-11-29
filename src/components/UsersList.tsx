import React, {useEffect} from 'react';
import {useSelectorTyped} from "../hooks/useSelectorTyped";
import {useDispatchTyped} from "../hooks/useDispatchTyped";
import {getUsers} from "../store/reducers/userReducer/thunks";
import {ResponseUser} from "../types/api.types";

function UsersList() {
    const {users, loading, errors} = useSelectorTyped(state => state.user);
    const dispatch = useDispatchTyped();

    useEffect(() => {
        dispatch(getUsers())
    }, []);

    // if(loading){
    //     return  <h1>Загрузка ...</h1>
    // }
    //
    // if(errors){
    //     return <h1>{errors}</h1>
    // }

    return (
        <div>
            <div>
                {errors ? <h1>{errors}</h1> :
                    (loading ? <h1>Загрузка...</h1> : users.map((item: ResponseUser) => <div>{item.name}</div>))}
            </div>
        </div>
    );
}


//
export default UsersList;