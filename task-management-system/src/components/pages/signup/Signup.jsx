import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button} from '@chakra-ui/react'
import { CommonButton } from '../../styledComponent/CommonButton'
import { LoginInp , LoginBox } from '../../styledComponent/LoginComp'

export const Signup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Sign In</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
            
          <ModalHeader>Enter your details here</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <LoginBox>
                <LoginInp placeholder='Enter here'/>
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