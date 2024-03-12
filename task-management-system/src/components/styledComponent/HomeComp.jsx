import { Box, GridItem, Image, Text} from '@chakra-ui/react';
import styled from '@emotion/styled';

export const MidBox = styled(Box)`
    width: 85%;
    margin-left: 7%;
    margin-bottom: 30%;
    margin-top: 3%;
`
export const TextBox = styled(Box)`
    width: 49%;
`
export const GreyText = styled(Text)`
    color: #757474;
    font-weight: 400;
    font-size: 22px;
    margin-top: 40px;
    margin-bottom: 40px;
`
export const ImgOrange = styled(Image)`
    width: 100%;
    margin-top: -40%;
    opacity: 0.3;
`
export const ImgBg = styled(Image)`
    opacity: 0.2;
    height: 100%;
    /* margin-left: -10%; */
    width: 60%;
`
export const GridIt = styled(GridItem)`
    padding: 10px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    height: 200px;
`
export const GridImg = styled(Image)`
    height: 60%;
    margin:  0% 0% 10% 15%;
`