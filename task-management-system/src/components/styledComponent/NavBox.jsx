import styled from '@emotion/styled';
import {Box, Button, Flex, Image} from '@chakra-ui/react';

export const NavBox = styled(Flex)`
    height: auto;
    gap: 20px;
    align-items: center;
    padding: 10px;
`

export const NavButton = styled(Button)`
    background-color: transparent;
    &:hover {
        background-color: #d4d4d4;
    }
`

export const Logo = styled(Image)`
    height: 38px;
    width: 12%;
`

export const MainNav = styled(Box)`
    position: fixed;
    z-index: 1000;
    width: 100%;
    background-color: white;
`
