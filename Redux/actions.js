
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



 // add more actions