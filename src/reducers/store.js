import { createStore } from 'redux';
import appReducer from './books';

const store = createStore(appReducer);
export default store;
