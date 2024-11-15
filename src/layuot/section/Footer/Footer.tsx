import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import yellowBgFooter from "../../../assets/images/yellowBgFooter.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"48"} width={"48"} viewBox={"0 0 48 48"} iconId={"instagram"}/>   
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"48"} width={"48"} viewBox={"0 0 48 48"} iconId={"linkedin"}/>   
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"48"} width={"48"} viewBox={"0 0 48 48"} iconId={"envelope"}/>   
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© Filipp Samsonau 2024</Copyright>
                <Image src={yellowBgFooter} alt="" />
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
`

const SocialList = styled.ul`
    display: flex;
    gap: 24px;
    margin-bottom: 32px;


    position: relative;
    z-index: 999;

`

const SocialItem = styled.li`
    &:hover {
        transform: translateY(-10px);
    }
`

const SocialLink = styled.a`
    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.secondaryBg};
    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 16px;
`
const Image = styled.img`
    width: 100%;
    margin-top: -120px;

    position: relative;
    z-index: 500;
`
