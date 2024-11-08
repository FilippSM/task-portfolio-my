import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import yellowBgFooter from "../../../assets/images/yellowBgFooter.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";

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
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    
`

const Copyright = styled.small`
    
`
const Image = styled.img`
    width: 100%;
`