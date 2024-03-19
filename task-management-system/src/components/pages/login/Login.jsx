import { Button, Center, Text} from '@chakra-ui/react'
import { ImgOrange, TextBox } from '../../styledComponent/HomeComp'
// import '../../css/login.css'
import { LoginBox } from '../../styledComponent/LoginComp'
import { Signup } from '../signup/Signup'
import { useState } from 'react'
import { LoginLogic } from './LoginLogic'

export const Login = () => {
    const[isModal , setModal] = useState(false);
    const signupModal = () => {
        setModal(!isModal);
    }
    const getModal = () => {
        return <Signup/>
    }
return(
    <div>
    <Center >
        <TextBox m={20}>
            <LoginBox className='loginBox'>
                
                <LoginLogic/>

                <Text>Don't have any Account ?</Text>
                <Button onClick={signupModal}>Sign In</Button>
            </LoginBox>

            {isModal ? getModal() : console.log("Modal close")}
        </TextBox>
    </Center>
    <ImgOrange src="https://webstockreview.net/images/background-images-png-3.png"/>
    
    </div>
)
}