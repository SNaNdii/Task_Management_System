import { Alert, Text } from "@chakra-ui/react";
import { LoginInp } from "../../styledComponent/LoginComp";
import { CommonButton } from "../../styledComponent/CommonButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/loginRedux/action";

export const LoginLogic = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const handleChange = () => {
    dispatch(login(username, password));
    // Alert("Login Succesfully");
    console.log("login Successfull")
  };
  return (
    <>
      <Text fontSize="xl">Enter your Username</Text>
      <LoginInp
        placeholder="Enter username here"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Text fontSize="xl">Enter your Password</Text>
      <LoginInp
        placeholder="Enter password here"
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <CommonButton onClick={handleChange}>login</CommonButton>
    </>
  );
};
