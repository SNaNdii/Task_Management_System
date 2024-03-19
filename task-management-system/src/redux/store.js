import {combineReducers, legacy_createStore as createStore} from 'redux'
import { loginReducer } from './loginRedux/reducer'

const rootReducer = combineReducers({
    login : loginReducer
})
export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log("State : " , store.getState());