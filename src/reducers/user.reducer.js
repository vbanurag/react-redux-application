import {
    FETCH_USER_ERROR,
    FETCH_USER_STARTED,
    FETCH_USER_SUCCESS
} from '../config/config.constant';


const intialState = {
    products: [],
    loading: false,
    err: null
}

export const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_USER_STARTED:
            {
                return {
                    ...state,
                    loading: true,
                    err:null
                }
            }
        case FETCH_USER_SUCCESS:
            {
                let user = state.users.concat(action.users);
                return {
                    ...state,
                    users: user,
                    loading: false,
                    err:null
                }
            }
        case FETCH_USER_ERROR:
            {
                return {
                    ...state,
                    err: action.err
                }
            }
       /* case 'USER_ADD':
            {
                console.log('updated')
            }*/

    }
    return state;
}
