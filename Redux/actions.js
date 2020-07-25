
export const ADD = 'ADD'
export const DELETE = 'DELETE'
export const ADD_ITEM = 'ADD_ITEM'

 

 export const add =  (count)=>(
    {
        type: ADD,
        data: count, 
    }
 )

 export const additem = (name)=>{
     return{
         type:'ADD_ITEM',
         data:name
     }
 }


//Async for thunk -- allow asyn request too
 export const addAsync =  (count)=>(
    {
        type: 'ADD_Async',
        data: count, 
    }
 )
 export const addAsyncHandler = (count)=>{
     return dispatch =>{
         setTimeout(()=>{
             dispatch(addAsync(1))
         },1000)
     }
 }

//Async for thunk

export const addsaga = (count)=>({

    type:'ADDSagaInput',
    data:count,

})



/*
The idea is that a saga is similar to a separate thread in your application that’s solely 
responsible for side effects. However, unlike Redux-Thunk, which utilizes callback functions,
a Redux-Saga thread can be started, paused and cancelled from the main application with normal
Redux actions. Like Redux-Thunk, Redux-Saga has access to the full Redux application state and it 
can dispatch Redux actions as well.*/



 // add more actions
