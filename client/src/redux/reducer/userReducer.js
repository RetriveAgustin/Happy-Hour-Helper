import {
  GET_USERS,
  GET_LOGGED_USER,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
} from "./../actions/actions";

const initialState = {
  users: [],
  userLogged: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case LOGIN_USER:
      return { ...state, userLogged: action.payload };
    case GET_LOGGED_USER:
      return { ...state, userLogged: action.payload[0] };
    case LOGOUT_USER:
      return { ...state, userLogged: {} };
    case REGISTER_USER:
      return state;
    default:
      return state;
  }
};

export default userReducer;
