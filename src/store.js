
import rootReducer from './reducers/combineReducer';
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";


let store=createStore(rootReducer, composeWithDevTools());

export default store;
