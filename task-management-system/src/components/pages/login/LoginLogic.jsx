import { Alert, Text } from "@chakra-ui/react";
import { LoginInp } from "../../styledComponent/LoginComp";
import { CommonButton } from "../../styledComponent/CommonButton";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/loginRedux/action";

export const LoginLogic = () => {

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const[users, setUsers] = useState([]);

  // const[userPresent, setuserPresent] = useState(false);
  let flag = false
  const checkUser = () => {
    for(let i=0; i<users.length; i++){
      if(users[i].username === username && users[i].password === password){
        console.log("true = for loop")
        flag = true;
        // setuserPresent(true);
        return;
      }
    }
  }

  const handleLogin = () => {
    checkUser();
    if(flag == true){
      dispatch(login(username, password));
      alert(`Hello ${username} , Your Welcome`);
    }
    else{
      alert("Please Enter Correct Details");
    }
    // setuserPresent(false);
    flag = false;
  };

  useEffect(() =>{
    getUsersData();
  }, []);

  const getUsersData = async() => {
    try{
      const res = await fetch("http://localhost:8080/users/");
      const data = await res.json();
      setUsers(data);
      console.log("Data : ", data);
    }catch(err){
      console.log(err)
    }
  }

  console.log("users : ", users);

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
      <CommonButton onClick={handleLogin}>login</CommonButton>
    </>
  );
};
