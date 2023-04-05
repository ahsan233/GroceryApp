import userReducer from './Reducers';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';

const rootReducer = combineReducers({userReducer});
export const Store = createStore(rootReducer, applyMiddleware(thunk));