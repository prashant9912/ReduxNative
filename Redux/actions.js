
export const ADD = 'ADD'
export const DELETE = 'DELETE'
export const ADD_ITEM = 'ADD_ITEM'

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



 // add more actions