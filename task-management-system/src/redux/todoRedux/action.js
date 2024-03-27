// export const ADD_TODO = "ADD_TODO"

// export const addTodo = (data) => {
//     return {
//         type : ADD_TODO,
//         payload : data
//     }
// }
export const ADD_TODO = "ADD_TODO";
export const addTodo = (data) => {
    console.log(data,"datatataa")
    return {
        type : ADD_TODO,
        payload : data
    }
}