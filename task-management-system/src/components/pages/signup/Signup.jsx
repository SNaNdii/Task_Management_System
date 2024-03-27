import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Text} from '@chakra-ui/react'
import { CommonButton } from '../../styledComponent/CommonButton'
import { LoginInp , LoginBox } from '../../styledComponent/LoginComp'
import { useState } from 'react'

export const Signup = (Open) => {
    const[close, setClose] = useState(Open);
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      {/* <Button onClick={onOpen}>Sign In</Button> */}
        
      <Modal isOpen={close} onClose={() => setClose(false)}>
        {console.log("bchjbh j hj   hj bhj")}
        <ModalOverlay />

        <ModalContent>

          <ModalHeader>Enter your details here</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <LoginBox>
                <Text>Enter your name</Text>
                <LoginInp placeholder='Enter here' type='text'/>

                <Text>Enter your email id</Text>
                <LoginInp placeholder='Enter here' type='email'/>

                <Text>Set your username</Text>
                <LoginInp placeholder='Enter here' type='text'/>

                <Text>Set your password</Text>
                <LoginInp placeholder='Enter here' type='text'/>
            </LoginBox>
          </ModalBody>

          <ModalFooter>
            <CommonButton onClick={onClose}>Sign In</CommonButton>
          </ModalFooter>

        </ModalContent>
        
      </Modal>
    </>
  )
  }