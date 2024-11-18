import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
    position: relative;
    z-index: 1000;
    height: 60px;
    padding: 14px 0px 14px 0px;

    @media ${theme.media.tablet} {
        padding: 7px 0px 14px 0px;
    }
`

export const S = {
    Header
}