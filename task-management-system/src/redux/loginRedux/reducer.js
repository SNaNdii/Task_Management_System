import { LOGIN, LOGOUT } from "./action"

const init = {
    isAuthenticated : false,
    username : ''
}

export const loginReducer = (store=init, {type , payload}) => {
    switch(type){
        // case LOGIN: if(payload.username === 'Nandita' && payload.password === 'nandi12345'){
        //                 console.log("Login Successful")
        //                 return {
        //                     isAuthenticated : true,
        //                     username : payload.username
        //                 }
        //             }else {
        //                 console.log("Enter correct Details")
        //                 return store;
        //             }
        case LOGIN: console.log("Successful") 
                    return {
                        isAuthenticated : true,
                        username : payload.username
                    }
        case LOGOUT: return init;
        default : return store;
    }
}