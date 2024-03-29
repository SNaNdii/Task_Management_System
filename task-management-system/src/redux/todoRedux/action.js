// export const ADD_TODO = "ADD_TODO"

// export const addTodo = (data) => {
//     return {
//         type : ADD_TODO,
//         payload : data
//     }
// }
export const ADD_TODO = "ADD_TODO";
export const SAVE_TODO = "SAVE_TODO";

export const addTodo = (data) => {
    console.log(data,"datatataa")
    return {
        type : ADD_TODO,
        payload : data
    }
}

export const saveTodos = (data) => {
    console.log(data,"datatataa")
    return {
        type : SAVE_TODO,
        payload : data
    }
}