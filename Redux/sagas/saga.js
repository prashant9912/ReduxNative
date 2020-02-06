

import {takeEvery,put,delay} from 'redux-saga/effects'


//INPUT 
export function *watchADD(){
    yield takeEvery('ADDSagaInput',addfuncAsync)
}

 
//OUTPUT
function *addfuncAsync(){
    yield delay(2000)
    yield put({type:'ADDSAGA',data:1})
}