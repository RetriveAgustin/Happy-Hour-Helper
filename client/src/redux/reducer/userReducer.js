import {
    GET_USERS,
    GET_LOGGED_USER,
    LOGIN_USER,
    REGISTER_USER,
  } from "./../actions/actions";

const initialState = {
    users: [],
    userLoged: {}
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return { ...state, users: action.payload };
        case LOGIN_USER:
            return state;
        case GET_LOGGED_USER:
            return { ...state, userLoged: action.payload[0]};
        case REGISTER_USER:
            return state;
        default:
            return state;
    }
}

export default userReducer;