import { Center, Text} from '@chakra-ui/react'
import { ImgOrange, TextBox } from '../../styledComponent/HomeComp'
import { CommonButton } from '../../styledComponent/CommonButton'
// import '../../css/login.css'
import { LoginBox , LoginInp} from '../../styledComponent/LoginComp'
import { Signup } from '../signup/Signup'

export const Login = () => {
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
                <Text>Don't have any Account ? <Signup/> </Text>
            </LoginBox>
        </TextBox>
    </Center>
    <ImgOrange src="https://webstockreview.net/images/background-images-png-3.png"/>
    
    </div>
)
}