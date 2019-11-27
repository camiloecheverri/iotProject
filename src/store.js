import { createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from "./reducers";
import thunk from "redux-thunk";
const initialState = {};
// const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)  
    )
);
export default store;