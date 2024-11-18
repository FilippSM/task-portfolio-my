import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
`;

const StyledFlexWrapper = styled(FlexWrapper)`
    height: 344px;

    @media ${theme.media.mobile} {
        height: 272px;
    }
`;


const ContainerIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const SocialList = styled.ul`
    display: flex;
    gap: 24px;
    margin-bottom: 32px;

    position: relative;
    z-index: 999;
`;

const SocialItem = styled.li`
    &:hover {
        transform: translateY(-10px);
    }
`;

const SocialLink = styled.a`
    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.secondaryBg};
    }
`;

const Copyright = styled.small`
    font-weight: 400;
    font-size: 16px;
`;

const Image = styled.img`
    width: 100%;
    margin-top: -120px;

    position: relative;
    z-index: 500;

    @media ${theme.media.mobile} {
        margin-top: 0px;

    }
`;

export const S = {
    Footer,
    StyledFlexWrapper,
    ContainerIcons,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright,
    Image
}