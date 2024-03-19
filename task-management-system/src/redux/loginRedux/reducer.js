import { LOGIN, LOGOUT } from "./action"

const init = {
    isAuthenticated : false,
    username : ''
}

export const loginReducer = (store=init, {type , payload}) => {
    switch(type){
        case LOGIN: if(payload.username === 'Nandita' && payload.password === 'nandi12345'){
                        return {
                            isAuthenticated : true,
                            username : payload.username
                        }
                    }else {
                        return store;
                    }
        case LOGOUT: return init;
        default : return store;
    }
}