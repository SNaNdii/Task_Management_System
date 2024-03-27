import {combineReducers, legacy_createStore as createStore} from 'redux'
import { loginReducer } from './loginRedux/reducer'
import { todoReducer } from './todoRedux/reducer';

const rootReducer = combineReducers({
    login : loginReducer,
    todos : todoReducer
})

export const store = createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log("State : " , store.getState());