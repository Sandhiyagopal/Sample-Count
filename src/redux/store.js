import { createStore } from 'redux';
import createReducer from './reducer';

const Store = createStore(createReducer);

export default Store;