import styled from '@emotion/styled';
import {Button, Flex, Image} from '@chakra-ui/react';

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
