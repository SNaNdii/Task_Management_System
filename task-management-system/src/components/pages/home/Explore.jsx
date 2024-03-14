import { Grid, Center, Text } from "@chakra-ui/react"
import { GridImg, GridIt, MidBox } from "../../styledComponent/HomeComp"

export const Explore = () => {
    return <>
        <Center>
                <Text fontSize='3xl' as='b'>Explore all Todoist has to offer</Text>
        </Center>
        <MidBox>
                <Grid templateColumns='repeat(5, 2fr)' gap='4%'>
                        <GridIt>
                                <GridImg src='https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_128/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fexplore%2Ffeatures.png'></GridImg>
                                <Center>Features</Center>
                        </GridIt>
                        <GridIt>
                                <Center>
                                        <GridImg src='https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_128/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fexplore%2Ftemplates.png'></GridImg>
                                </Center>
                                <Center>Template gallery</Center>
                        </GridIt>
                        <GridIt>
                                <Center>
                                        <GridImg src='https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_128/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fexplore%2Fprod-quiz.png'></GridImg>
                                </Center>
                                <Center>Productivity quiz</Center>
                        </GridIt>
                        <GridIt>
                                <Center>
                                        <GridImg src='https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_128/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fexplore%2Fextensions.png'></GridImg>
                                </Center>
                                <Center>Extension gallery</Center>
                        </GridIt>
                        <GridIt>
                                <Center>
                                        <GridImg src='https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_128/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fexplore%2Finspiration.png'></GridImg>
                                </Center>
                                <Center>Inspiration hub</Center>
                        </GridIt>
                </Grid>
        </MidBox>
    </>
}