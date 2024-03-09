import { Center, Text } from "@chakra-ui/react"
import { TextBox } from "../styledComponent/HomeComp"

export const HomeTop = () => {

    return <>
        <Center>
            <TextBox>
                <Text fontSize='6xl' fontWeight="bold">Organize your work and life, finally.</Text>
                <Text fontSize='xl' m={2}>Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.</Text>
            </TextBox>
        </Center>
        
    </>
}