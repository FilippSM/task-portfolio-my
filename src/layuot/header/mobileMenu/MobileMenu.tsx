import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";



export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <SytledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={true}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <Link href="">{item}</Link>
                            </ListItem>
                        )
                    })}
                </ul>
            </MobileMenuPopup>  
        </SytledMobileMenu>
    );
};

const SytledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
  /*   top: 0; left: 0; right: 0; bottom: 0; - растяжение на все окно браузера*/
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(253, 196, 53, 0.9);
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 99999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.accent};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0); /* задается прозрачность спана */
        `}

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;  
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;  
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`

const ListItem = styled.li`
    height: 30px;
    &:hover {
        transform: skewX(12deg);
    }
`
const Link = styled.a`
    color: ${theme.colors.accent};
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.6;

    &:hover {
        /* color: white; */
        color: ${theme.colors.white};
        font-weight: 800;
        font-size: 22px;
    }
`