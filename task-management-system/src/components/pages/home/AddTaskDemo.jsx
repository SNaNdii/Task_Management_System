import { Container, Flex, Spacer, Text, Wrap } from '@chakra-ui/react';
import { GreyText, MidBox, TextBox } from '../../styledComponent/HomeComp';
// import {NavBox} from '../../styledComponent/NavBox'

export const AddTaskDemo = () => {
        return <>
                {/* <NavBox> */}
                <Wrap>
                        <TextBox> 
                                <Container maxW='container.sm'>
                                        <Text fontSize='xl' as='b' color='#f14b39' >Clear your mind</Text>
                                        <br/>
                                        <Text fontSize='4xl' as='b'>The fastest way to get tasks out of your head.</Text>
                                        <GreyText>Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition will instantly fill your to-do list.</GreyText>
                                </Container>
                                <MidBox>
                                        <Text fontSize='xl' as='b' color='#f14b39' >Clear your mind</Text>
                                        <br/>
                                        <Text fontSize='5xl' as='b'>The fastest way to get tasks out of your head.</Text>
                                        <GreyText>Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition will instantly fill your to-do list.</GreyText>
                                </MidBox>
                                <MidBox>
                                        <Text fontSize='xl' as='b' color='#f14b39' >Clear your mind</Text>
                                        <br/>
                                        <Text fontSize='5xl' as='b'>The fastest way to get tasks out of your head.</Text>
                                        <GreyText>Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition will instantly fill your to-do list.</GreyText>
                                </MidBox>
                        </TextBox>
                        <Spacer/>
                        <TextBox>
                                <MidBox>
                                        
                                </MidBox>
                        </TextBox>
                </Wrap>
                <Text>“Todoist makes it easy to go as simple or as complex as you want”</Text>
                <Text>– The Verge</Text>
                {/* </NavBox> */}
        </>
};

