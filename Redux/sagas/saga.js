

import {takeEvery,put,delay} from 'redux-saga/effects'



// SAGA Simple watches for any dispatch actions and manipulate it in 
// different ways and thrown to the reducer

//INPUT 
export function *watchADD(){
    yield takeEvery('ADDSagaInput',addfuncAsync)
}

 
//OUTPUT
function *addfuncAsync(){
    yield delay(2000)
    yield put({type:'ADDSAGA',data:1})
}