import {Routes , Route} from 'react-router-dom'
import { Login } from '../components/pages/login/Login'
import {Home} from '../components/pages/home/Home'

export const TodoApp = () => {

    return <>
        <Home/>
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </>
}