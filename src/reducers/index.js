import { combineReducers } from 'redux';
import appReducer from './books';
import filterReducer from './filter';

export default combineReducers({
  appReducer, filterReducer,
});
