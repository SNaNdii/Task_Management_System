import { Container, Flex, Spacer, Text, Wrap } from '@chakra-ui/react';
import { GreyText, MidBox, TextBox } from '../../styledComponent/HomeComp';
import { TaskTemplate } from './TaskTemplete';
// import {NavBox} from '../../styledComponent/NavBox'

export const AddTaskDemo = () => {
        return <>
                {/* <NavBox> */}
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
                        {/* <TextBox>
                                <TaskTemplate/>
                        </TextBox> */}
                </Flex>
        </>
};

