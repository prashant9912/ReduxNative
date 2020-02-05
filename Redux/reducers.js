import {ADD,DELETE, ADD_ITEM } from './actions'


// const initialState = {
//     list:[]
// }

const initialState = {
    count:0,
    countAsync:0,
    items:[]
}

const reducer = (state = initialState, action ) =>{

    switch (action.type){
        case ADD:{
            console.log(state)
             return ({
                 ...state,
                 count:state.count +action.data
             });
        }

        case ADD_ITEM:{
            console.log(state)
            return({
                ...state,
                items:[...state.items,action.data]
            })

        }

        case 'ADD_Async':{
            console.log(state)
            return({
                ...state,
                countAsync:state.countAsync+action.data
            })
        }
        // case ADD_ITEM:
        //     return{
        //         ...state.items,

        //     }

        case DELETE:
            return;
        default:
            return state
    }

}


export default reducer