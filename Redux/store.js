
import {createStore,combineReducers,applyMiddleware } from 'redux';

import Reducer from './reducers'

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    store:Reducer
})

const configureStore = ()=> createStore(rootReducer,applyMiddleware(thunk))


export default configureStore;