import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import rootReducer from "./../reducer/reducer"
import thunkMiddleware from "redux-thunk";
import userReducer from "../reducer/userReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    root: rootReducer,
    user: userReducer
})

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
