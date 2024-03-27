import { Text } from "@chakra-ui/react"
import { CommonButton } from "../../styledComponent/CommonButton"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../../../redux/todoRedux/action"
import { LoginInp } from "../../styledComponent/LoginComp"
import { LoginBox } from '../../styledComponent/LoginComp'
import { Center} from '@chakra-ui/react'
import { TextBox } from '../../styledComponent/HomeComp'
import { TodoTable } from "./TodoTable"



export const Todo = () => {

    const dispatch = useDispatch()
    const[text , setText] = useState("")
    const todos = useSelector((store) => store.todos.todos)

    const todoHandleAdd = () => {
        dispatch(
            addTodo(
                {
                    task : text,
                    status : false
                }
            )
        );
        setText("")
    }
    
    return (
        <div>
            <Center>
                <TextBox m={20}>
                    <LoginBox>
                        <LoginInp placeholder="Enter task here" value={text} onChange={(e) => setText(e.target.value)}/>
                        <CommonButton onClick={todoHandleAdd}>Submit task</CommonButton>
                    </LoginBox>
                </TextBox>
            </Center>
            {
                todos.map((e , i) =>{
                    return <Text key={i}>{e.task}</Text>
                })
            }
            <TodoTable/>
        </div>
    )
}