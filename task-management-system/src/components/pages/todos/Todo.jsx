import { CommonButton } from "../../styledComponent/CommonButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../../redux/todoRedux/action";
import { LoginInp } from "../../styledComponent/LoginComp";
import { LoginBox } from "../../styledComponent/LoginComp";
import { Center } from "@chakra-ui/react";
import { TextBox } from "../../styledComponent/HomeComp";
import { TodoTable } from "./TodoTable";

export const Todo = () => {
  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todos.todos);

  const [todo, setTodo] = useState({
    name: "",
    time: ""
  });

  const todoHandleAdd = (todo) => {
    dispatch(addTodo(todo));
    setData(todo)
    setTodo({
      name: "",
      time: ""
    });
  };

  const setData = (todos) => {
    fetch("http://localhost:8080/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todos),
    });
    alert("Data Successfully Submitted");
  };

  return (
    <div>
      <Center>
        <TextBox m={20}>
          <LoginBox>

            <LoginInp placeholder="Enter task here" value={todo.name} onChange={(e) => setTodo({ ...todo, name: e.target.value })} />
            <LoginInp placeholder="Enter estimated time here" value={todo.time} onChange={(e) => setTodo({ ...todo, time: e.target.value })} />

            <CommonButton onClick={()=>{todoHandleAdd(todo)}}>Submit task</CommonButton>
          </LoginBox>
        </TextBox>
      </Center>
      
      <TodoTable />
    </div>
  );
};
