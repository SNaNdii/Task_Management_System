import { Center, Divider, Flex, Grid, GridItem, List, ListItem, Text } from "@chakra-ui/react"
import "./css/footer.css"
import { GreyText, TextBox } from "./styledComponent/HomeComp"
import { CommonButton } from "./styledComponent/CommonButton"
import { Logo, NavButton } from "./styledComponent/NavBox"
export const Footer = () => {
    return <div className="footer">
        <Center>
            <TextBox>
                <Text fontSize='5xl' as='b'>Gain calmness and clarity with the world’s most beloved productivity app</Text>
                <GreyText>337,000+ ★★★★★ reviews on Google Play and App Store</GreyText>
                <CommonButton>Start for free</CommonButton>
            </TextBox>
        </Center>
        <Divider my={4} borderColor="gray.600" />

        <Flex>
            
            <Grid templateColumns='repeat(4, 1fr)'>
                <GridItem>
                    <Logo src="https://ucarecdn.com/d891cfcc-c46d-437f-b176-c5325e93ca55/-/format/auto/-/progressive/yes/-/preview/480x480/"/>
                </GridItem>

                <GridItem>
                    <List>
                        <ListItem>Features</ListItem>
                        <ListItem>How it works</ListItem>
                        <ListItem>For Team</ListItem>
                        <ListItem>Pricing</ListItem>
                    </List>
                </GridItem>

                <GridItem>
                    <List>
                        <ListItem>Features</ListItem>
                        <ListItem>How it works</ListItem>
                        <ListItem>For Team</ListItem>
                        <ListItem>Pricing</ListItem>
                    </List>
                </GridItem>

                <GridItem>
                    <List>
                        <ListItem>Features</ListItem>
                        <ListItem>How it works</ListItem>
                        <ListItem>For Team</ListItem>
                        <ListItem>Pricing</ListItem>
                    </List>
                </GridItem>

            </Grid>
        </Flex>
    </div>
}