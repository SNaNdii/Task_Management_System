import {Routes , Route} from 'react-router-dom'
import { Login } from '../components/pages/login/Login'
import {Home} from '../components/pages/home/Home'
import { NavBar } from '../components/NavBar'
import { Signup } from '../components/pages/signup/Signup'
import { Todo } from '../components/pages/todos/Todo'

export const TodoApp = () => {

    return <>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/todo' element={<Todo/>}></Route>
        </Routes>
    </>
}