import appReducer from './books'
import { createStore } from 'redux'

export const store = createStore(appReducer)