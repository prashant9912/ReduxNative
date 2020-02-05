
import {createStore,combineReducers } from 'redux';

import Reducer from './reducers'


const rootReducer = combineReducers({
    store:Reducer
})

const configureStore = ()=> createStore(rootReducer)


export default configureStore;