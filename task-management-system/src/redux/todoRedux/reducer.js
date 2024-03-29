// import { ADD_TODO } from "./action";

// const init = {todos : []}

// export const todoReducer = (store=init , {payload , type}) => {
//     switch(type){
//         case ADD_TODO : return {...store , todos : {...store.todos , payload}}
//         default : return store;
//     }
// }
import { ADD_TODO , SAVE_TODO } from "./action";

const init = {todos : []}

export const todoReducer = (store = init , {type , payload}) => {
    switch(type){
        case ADD_TODO : return {...store , todos : [...store.todos , payload]};
        case SAVE_TODO : return {...store , todos : payload}
        default : return store;
    }
}
