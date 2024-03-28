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
    time: "",
    rem: "",
    status: "",
  });

  const todoHandleAdd = (todo) => {
    dispatch(addTodo(todo));
    setData(todo)
    setTodo({
      name: "",
      time: "",
      rem: "",
      status: "",
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
            {/* <LoginInp
              placeholder="name"
              value={text}
              onChange={(e) => (e.target.value)}
            />
            <LoginInp
              placeholder="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <LoginInp
              placeholder="remove"
              value={removeOrNot}
              onChange={(e) => setRemove(e.target.value)}
            />
            <LoginInp
              placeholder="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            /> */}

            <LoginInp
              placeholder="name"
              value={todo.name}
              onChange={(e) => setTodo({ ...todo, name: e.target.value })}
            />
            <LoginInp
              placeholder="time"
              value={todo.time}
              onChange={(e) => setTodo({ ...todo, time: e.target.value })}
            />
            <LoginInp
              placeholder="remove"
              value={todo.rem}
              onChange={(e) => setTodo({ ...todo, rem: e.target.value })}
            />
            <LoginInp   
              placeholder="status"
              value={todo.status}
              onChange={(e) => setTodo({ ...todo, status: e.target.value })}
            />

            <CommonButton onClick={()=>{todoHandleAdd(todo)}}>Submit task</CommonButton>
          </LoginBox>
        </TextBox>
      </Center>
      {/* {
                todos.map((e , i) =>{
                    return (
                        <div>
                            <Text key={i}>{e.name}</Text>
                            <Text key={i}>{e.time}</Text>
                            <Text key={i}>{e.rem}</Text>
                            <Text key={i}>{e.status}</Text>
                        </div>
                        
                    )
                    // return <Text key={i}>{e.task}</Text>
                })
            } */}
      <TodoTable />
    </div>
  );
};
