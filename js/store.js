import { createStore } from 'redux';
import combineReducers from './rootReducer';

const store = createStore(combineReducers);
export default store;
