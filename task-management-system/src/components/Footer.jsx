import { Box, Center, Heading, Divider, Flex, Grid, GridItem, Icon, Image, List, ListItem, Spacer, Text } from "@chakra-ui/react"
import "./css/footer.css"
import { GreyText, TextBox } from "./styledComponent/HomeComp"
import { CommonButton } from "./styledComponent/CommonButton"
import {FaFacebook , FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import { ListIt , ListMain } from "./styledComponent/FooterComp"

export const Footer = () => {
    return <div className="footer">
        <Center>
            <TextBox>
                <Text fontSize='5xl' as='b'>Gain calmness and clarity with the world’s most beloved productivity app</Text>
                <GreyText>337,000+ ★★★★★ reviews on Google Play and App Store</GreyText>
                <CommonButton>Start for free</CommonButton>
            </TextBox>
        </Center>
        <Divider my={10} borderColor="gray.500" />

        <Flex className="footer_box" >

            <Box className="footer_img">
                <img  src="https://ucarecdn.com/d891cfcc-c46d-437f-b176-c5325e93ca55/-/format/auto/-/progressive/yes/-/preview/480x480/"/>
                <Text fontSize='xl'>Join millions of people who organize work and life with Todoist.</Text>
            </Box>

            <Spacer/>

            <ListMain>
                <ListIt> <Text as='b'>Features</Text> </ListIt>
                <ListIt>How it works</ListIt>
                <ListIt>For Team</ListIt>
                <ListIt>Pricing</ListIt>
                <ListIt>Templates</ListIt>
            </ListMain>
            <Spacer/>
            <ListMain>
                <ListIt> <Text as='b'>Resources</Text> </ListIt>
                <ListIt>Download Apps</ListIt>
                <ListIt>Help Center</ListIt>
                <ListIt>Productivity Methods</ListIt>
                <ListIt>Integrations</ListIt>
                <ListIt>Channel Partners</ListIt>
                <ListIt>Developer API</ListIt>
                <ListIt>Status</ListIt>
            </ListMain>
            <Spacer/>
            <ListMain>
                <ListIt> <Text as='b'>Company</Text> </ListIt>
                <ListIt>About Us</ListIt>
                <ListIt>Careers</ListIt>
                <ListIt>Inspiration Hub</ListIt>
                <ListIt>Press</ListIt>
                <ListIt>Twist</ListIt>
            </ListMain>
            <Spacer/>
            <ListMain>
                <ListIt><Icon as={FaFacebook} boxSize={6} color="black" /></ListIt>
                <ListIt><Icon as={FaInstagram} boxSize={6} color="black" /></ListIt>
                <ListIt><Icon as={FaTwitter} boxSize={6} color="black" /></ListIt>
                <ListIt><Icon as={FaYoutube} boxSize={6} color="black" /></ListIt>
            </ListMain>
        </Flex>
        <Box className="last"></Box>
    </div>
}