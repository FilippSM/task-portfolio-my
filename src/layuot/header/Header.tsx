import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

const items = ["About", "Projects", "Contacts"];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"} height={"40px"}>
                    <Logo/>
                    <Menu menuItems={items}/>
                </FlexWrapper>  
            </Container>       
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: relative;
    z-index: 1000;
    height: 60px;
    padding: 14px 0px 14px 0px;
`