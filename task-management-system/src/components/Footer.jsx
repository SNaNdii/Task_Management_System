import { Center, Divider, Flex, Grid, GridItem, Icon, List, ListItem, Text } from "@chakra-ui/react"
import "./css/footer.css"
import { GreyText, TextBox } from "./styledComponent/HomeComp"
import { CommonButton } from "./styledComponent/CommonButton"
import { Logo } from "./styledComponent/NavBox"
import {FaFacebook , FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

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

            <Grid templateColumns='repeat(5, 1fr)'>
                <GridItem>
                    <Logo src="https://ucarecdn.com/d891cfcc-c46d-437f-b176-c5325e93ca55/-/format/auto/-/progressive/yes/-/preview/480x480/"/>
                </GridItem>

                <GridItem>
                    <List>
                        <ListItem> <Text as='b'>Features</Text> </ListItem>
                        <ListItem>How it works</ListItem>
                        <ListItem>For Team</ListItem>
                        <ListItem>Pricing</ListItem>
                    </List>
                </GridItem>

                <GridItem>
                    <List>
                        <ListItem> <Text as='b'>Resources</Text> </ListItem>
                        <ListItem>How it works</ListItem>
                        <ListItem>For Team</ListItem>
                        <ListItem>Pricing</ListItem>
                    </List>
                </GridItem>

                <GridItem>
                    <List>
                        <ListItem> <Text as='b'>Company</Text> </ListItem>
                        <ListItem>How it works</ListItem>
                        <ListItem>For Team</ListItem>
                        <ListItem>Pricing</ListItem>
                    </List>
                </GridItem>

                <GridItem>
                    <List>
                        <ListItem><Icon as={FaFacebook} boxSize={6} color="black" /></ListItem>
                        <ListItem><Icon as={FaInstagram} boxSize={6} color="black" /></ListItem>
                        <ListItem><Icon as={FaTwitter} boxSize={6} color="black" /></ListItem>
                        <ListItem><Icon as={FaYoutube} boxSize={6} color="black" /></ListItem>
                    </List>
                </GridItem>

            </Grid>
        </Flex>
    </div>
}