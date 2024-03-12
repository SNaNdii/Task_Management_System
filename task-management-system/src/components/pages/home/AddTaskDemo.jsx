import { Box, Center, Container, Flex, Grid, GridItem, Image, Spacer, Text, Wrap } from '@chakra-ui/react';
import { GreyText, GridImg, GridIt, MidBox, TextBox } from '../../styledComponent/HomeComp';
import { TaskTemplate } from './TaskTemplete';
// import {NavBox} from '../../styledComponent/NavBox'

export const AddTaskDemo = () => {
        return <>
                <Flex className='main'>
                        <TextBox> 
                                <MidBox >
                                        <Text fontSize='xl' as='b' color='#f14b39' >Clear your mind</Text>
                                        <br/>
                                        <Text fontSize='4xl' as='b'>The fastest way to get tasks out of your head.</Text>
                                        <GreyText>Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition will instantly fill your to-do list.</GreyText>
                                </MidBox>
                                <MidBox>
                                        <Text fontSize='xl' as='b' color='#f14b39' >Focus on what’s important</Text>
                                        <br/>
                                        <Text fontSize='4xl' as='b'>Reach that mental clarity you’ve been longing for.</Text>
                                        <GreyText>Your tasks are automatically sorted into Today, Upcoming, and custom Filter views to help you prioritize your most important work.</GreyText>
                                </MidBox>
                                <MidBox>
                                        <Text fontSize='xl' as='b' color='#f14b39' >Organize your teamwork, too</Text>
                                        <br/>
                                        <Text fontSize='4xl' as='b'>Where all your tasks can finally coexist.</Text>
                                        <GreyText>Give your team a shared space to collaborate and stay on top of it all – alongside but separate from your personal tasks and projects.</GreyText>
                                </MidBox>
                        </TextBox>

                        <TaskTemplate/>

                </Flex>

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
};

