import { Center, Text } from "@chakra-ui/react"
import { MainBox, GreyText, TextBox, ImgOrange } from "../../styledComponent/HomeComp"
import { CommonButton } from "../../styledComponent/CommonButton"

export const HomeTop = () => {

    return (
        <>
            <Center >
                <TextBox m={20}>
                    <Text fontSize='6xl' fontWeight="bold">Organize your work and life, finally.</Text>
                    <GreyText fontSize='xl'>Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.</GreyText>
                    <CommonButton>Start for free</CommonButton>
                </TextBox>
            </Center>
            <ImgOrange src="https://webstockreview.net/images/background-images-png-3.png"/>
        </>
    )
}