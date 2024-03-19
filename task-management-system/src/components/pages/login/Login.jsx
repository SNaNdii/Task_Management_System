import { Button, Center, Text} from '@chakra-ui/react'
import { ImgOrange, TextBox } from '../../styledComponent/HomeComp'
import { CommonButton } from '../../styledComponent/CommonButton'
// import '../../css/login.css'
import { LoginBox , LoginInp} from '../../styledComponent/LoginComp'
import { Signup } from '../signup/Signup'
import { useState } from 'react'

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
                <Text fontSize='xl'>Enter your Username</Text>
                <LoginInp placeholder='Enter username here'/>
                <Text fontSize='xl'>Enter your Password</Text>
                <LoginInp placeholder='Enter password here'/>
                <CommonButton>login</CommonButton>
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