export const LOGIN = 'LOGIN'

export const login = (username , password) => {
    return {
        type : LOGIN,
        payload : {username , password}
    }
}