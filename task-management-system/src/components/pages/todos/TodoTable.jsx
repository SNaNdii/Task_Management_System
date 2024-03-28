import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from "react";


export const TodoTable = () => {

    const[task , setTask] = useState([]);
    const[statusText , setStatusText] = useState(false);
    console.log("Todo Table Start");
    console.log(task);

    useEffect(() => {
        getTask();
    }, []);
    
    const getTask = async () => {
        try{
            const res = await fetch("http://localhost:8080/todo")
            const data = await res.json();
            console.log(data);
            setTask(data);
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
                    task.map( (e) => {
                        return (
                            <Tr>
                                <Td> {e.id} </Td>
                                <Td>{e.name}</Td>
                                <Td>{e.time}</Td>
                                <Td><Button>{statusText ? "Remove" : "Can't Remove"}</Button></Td>
                                <Td><Button onClick={() => setStatusText(!statusText)}>{statusText ? "Completed" : "Not Completed"}</Button></Td>
                            </Tr>
                        )
                    })
                }
            </Tbody>
        </Table>
    )
}