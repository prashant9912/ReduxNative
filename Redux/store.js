
import {createStore,combineReducers,applyMiddleware } from 'redux';
import Reducer from './reducers'

//async handlers
import thunk from 'redux-thunk'

import createSagaMiddleware from 'redux-saga'
import {watchADD} from './sagas/saga'

const sagaMiddleware = createSagaMiddleware();


//combbile multiple reducers
const rootReducer = combineReducers({
    store:Reducer
})

// const configureStore = ()=> createStore(rootReducer,applyMiddleware(thunk))
const configureStore = ()=> {
    const a=  createStore(rootReducer,applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(watchADD) 

    return a

}





export default configureStore;