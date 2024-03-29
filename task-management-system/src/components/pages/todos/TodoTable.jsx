import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { saveTodos } from '../../../redux/todoRedux/action';


export const TodoTable = () => {
    const dispatch = useDispatch();
    const task = useSelector((store) => store.todos.todos);
    // const[task , setTask] = useState([]);
    

    console.log("Todo Table Start");

    useEffect(() => {
        getTask();
    }, []);
    
    const getTask = async () => {
        try{
            const res = await fetch("http://localhost:8080/todo")
            const data = await res.json();
            console.log(data);
            // setTask(data);
            dispatch(saveTodos(data));
        }catch(err){
            console.log(err);
        }
    }

    return (
        <Table variant="striped" colorScheme="teal">
            <Thead>
                <Tr>
                    <Th>S No.</Th>
                    <Th>Task Name</Th>
                    <Th>Estimated Time</Th>
                    <Th>Remove</Th>
                    <Th>Status</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    task.map( (e, i) => {
                        return (
                            <TableRow e={e} i={i}/>
                        )
                    })
                }
            </Tbody>
        </Table>
    )
}

function TableRow({e, i}){
    const[statusText , setStatusText] = useState(false);
    return (
        <Tr>
            <Td> {i+1} </Td>
            <Td>{e.name}</Td>
            <Td>{e.time}</Td>
            <Td><Button>{statusText ? "Remove" : "Can't Remove"}</Button></Td>
            <Td><Button onClick={() => setStatusText(!statusText)}>{statusText ? "Completed" : "Not Completed"}</Button></Td>
        </Tr>

    )
}