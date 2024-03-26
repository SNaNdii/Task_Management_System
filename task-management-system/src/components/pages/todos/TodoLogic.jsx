import { Input, Text } from "@chakra-ui/react"
import { CommonButton } from "../../styledComponent/CommonButton"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../../../redux/todoRedux/action"

export const TodoLogic = () => {

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
            <Input placeholder="Enter task here" value={text} onChange={(e) => setText(e.target.value)}/>
            <CommonButton onClick={todoHandleAdd}>Submit task</CommonButton>
            {
                todos.map((e , i) =>{
                    return <Text key={i}>{e.task}</Text>
                })
            }
        </div>
    )
}