import styled from '@emotion/styled';
import {Box, Button, Flex, Image} from '@chakra-ui/react';

export const NavBox = styled(Flex)`
    height: 60px;
    gap: 20px;
    align-items: center;
`

export const NavButton = styled(Button)`
    background-color: white;
    &:hover {
        background-color: #b9b9b9;
    }
`

export const Logo = styled(Image)`
    height: 40px;
    width: 10%;
`

export const MainNav = styled(Box)`
    position: fixed;
    z-index: 1000;
    width: 100%;
    background-color: white;
`
