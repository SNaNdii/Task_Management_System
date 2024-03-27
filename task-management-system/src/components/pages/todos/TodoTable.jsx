import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';


export const TodoTable = () => {
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
                <Tr>
                    <Td>1</Td>
                    <Td>Learn react</Td>
                    <Td>15 days</Td>
                    <Td><Button>Remove</Button></Td>
                    <Td><Button>Not Completed</Button></Td>
                </Tr>
            </Tbody>
        </Table>
    )
}