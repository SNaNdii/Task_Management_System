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

export const Signup = (Open) => {
  const [close, setClose] = useState(Open);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const[name , setName] = useState("");
  const[email, setEmail] = useState("");
  const[userId , setUserId] = useState("");
  const[pass , setPass] = useState("");

  const[user , setUser] = useState({
    name : "",
    email : "",
    username : "",
    password : ""
  })

  const userAdd = () => {
    setUser({
      name : name,
      email : email,
      username : userId,
      password : pass
    })
    setData();
  }

  const setData = () => {
    fetch("http://localhost:8080/users" , {
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(user)
    });
    alert("Signup Successfully")
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
              <LoginInp placeholder="Enter here" value={name} onChange={(e) => setName(e.target.value)}/>

              <Text>Enter your email id</Text>
              <LoginInp placeholder="Enter here" value={email} onChange={(e) => setEmail(e.target.value)}/>

              <Text>Set your username</Text>
              <LoginInp placeholder="Enter here" value={userId} onChange={(e) => setUserId(e.target.value)}/>

              <Text>Set your password</Text>
              <LoginInp placeholder="Enter here" value={pass} onChange={(e) => setPass(e.target.value)}/>
            </LoginBox>
          </ModalBody>

          <ModalFooter>
            <CommonButton onClose={() => setClose(false)} onClick={userAdd} >Sign In</CommonButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
