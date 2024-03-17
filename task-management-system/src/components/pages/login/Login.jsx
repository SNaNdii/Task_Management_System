import { Container, Flex, Image, Input, Text } from '@chakra-ui/react'
import {NavBar} from '../../NavBar'
import { CommonButton } from '../../styledComponent/CommonButton'

export const Login = () => {
return(
    <div>
    <NavBar/>

    <Flex>
        <Container className='loginBox'>
            <Input placeholder='Enter username here'/>
            <Input placeholder='Enter password here'/>
            <CommonButton>login</CommonButton>
            <Text>Don't have any Account ?</Text>
        </Container>

        <Container>
            <Image src=''/>
        </Container>
    </Flex>
    </div>
)
}