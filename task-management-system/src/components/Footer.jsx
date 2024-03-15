import { Box, Center, Divider, Flex, Icon, Spacer, Text } from "@chakra-ui/react"
import "./css/footer.css"
import { GreyText, TextBox } from "./styledComponent/HomeComp"
import { CommonButton } from "./styledComponent/CommonButton"
import {FaFacebook , FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import { ListIt , ListMain } from "./styledComponent/FooterComp"
import { NavButton } from "./styledComponent/NavComp"

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
                <ListIt> <NavButton><Text as='b'>Features</Text></NavButton> </ListIt>
                <ListIt><NavButton>How it works</NavButton></ListIt>
                <ListIt><NavButton>For Team</NavButton></ListIt>
                <ListIt><NavButton>Pricing</NavButton></ListIt>
                <ListIt><NavButton>Templates</NavButton></ListIt>
            </ListMain>
            <Spacer/>
            <ListMain>
                <ListIt><NavButton><Text as='b'>Resources</Text></NavButton></ListIt>
                <ListIt><NavButton>Download Apps</NavButton></ListIt>
                <ListIt><NavButton>Help Center</NavButton></ListIt>
                <ListIt><NavButton>Productivity Methods</NavButton></ListIt>
                <ListIt><NavButton>Integrations</NavButton></ListIt>
                <ListIt><NavButton>Channel Partners</NavButton></ListIt>
                <ListIt><NavButton>Developer API</NavButton></ListIt>
                <ListIt><NavButton>Status</NavButton></ListIt>
            </ListMain>
            <Spacer/>
            <ListMain>
                <ListIt><NavButton><Text as='b'>Company</Text></NavButton></ListIt>
                <ListIt><NavButton>About Us</NavButton></ListIt>
                <ListIt><NavButton>Careers</NavButton></ListIt>
                <ListIt><NavButton>Inspiration Hub</NavButton></ListIt>
                <ListIt><NavButton>Press</NavButton></ListIt>
                <ListIt><NavButton>Twist</NavButton></ListIt>
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