import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { CommonButton } from "../../styledComponent/CommonButton";
import { LoginInp, LoginBox } from "../../styledComponent/LoginComp";
import { useState } from "react";

export const Signup = () => {
  const [close, setClose] = useState(true);

  const[userDetails , setUserDetails] = useState({
    name : "",
    email : "",
    username : "",
    password : ""
  })

  const handleUserDetails = (field , value) => {
    setUserDetails((prev) => {
      return {...prev , [field] : value}
    })
  }

  const saveData = () => {
    fetch("http://localhost:8080/users" , {
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(userDetails)
    });
    alert("Signup Successfully");
    setClose(false);
    setUserDetails({
      name : "",
      email : "",
      username : "",
      password : ""
    });
  }

  return (
    <>
      <Modal isOpen={close} onClose={() => setClose(false)}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Enter your details here</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <LoginBox>
              <Text>Enter your name</Text>
              <LoginInp placeholder="Enter here" value={userDetails.name} onChange={(e) => handleUserDetails("name" , e.target.value)}/>

              <Text>Enter your email id</Text>
              <LoginInp placeholder="Enter here" value={userDetails.email} onChange={(e) => handleUserDetails("email" , e.target.value)}/>

              <Text>Set your username</Text>
              <LoginInp placeholder="Enter here" value={userDetails.userId} onChange={(e) => handleUserDetails("username" , e.target.value)}/>

              <Text>Set your password</Text>
              <LoginInp placeholder="Enter here" value={userDetails.pass} onChange={(e) => handleUserDetails("password" , e.target.value)}/>
            </LoginBox>
          </ModalBody>

          <ModalFooter>
            <CommonButton onClick={saveData} >Sign In</CommonButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
