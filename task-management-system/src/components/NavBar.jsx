import { Spacer } from "@chakra-ui/react"
import {Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { CommonButton } from "./styledComponent/CommonButton"
import { NavBox , NavButton , Logo } from "./styledComponent/NavBox"

export const NavBar = () => {

    return (
        <div>
            <NavBox>
                <Logo src="https://ucarecdn.com/d891cfcc-c46d-437f-b176-c5325e93ca55/-/format/auto/-/progressive/yes/-/preview/480x480/"/>
                <Spacer/>
                <NavButton>Features</NavButton>
                <NavButton>For Teams</NavButton>
                <Menu>
                    <MenuButton as={NavButton} rightIcon={<ChevronDownIcon />}>Resources
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                    </MenuButton>
                </Menu>
                <NavButton>Pricing</NavButton>
                <NavButton>Login</NavButton>
                <CommonButton>Start for free</CommonButton>
            </NavBox>
        </div>
    )
}