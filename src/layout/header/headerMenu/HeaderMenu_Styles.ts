import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

//Menu
const MenuItem = styled.li`
    &:hover {
        transform: skewX(12deg);
    }
  /*   position: relative; */
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

//Desktop
const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        height: 40px;
        align-items: center;
    }
`

//Mobile
const MobileMenu = styled.nav`
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
  /*   top: 0; left: 0; right: 0; bottom: 0; - растяжение на все окно браузера*/
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(253, 196, 53, 0.9);
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
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

    li {
        height: 30px;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 99999999;

    span {
        display: block;
        width: 18px;
        height: 2px;
        background-color: ${theme.colors.accent};
        position: absolute;
        left: 60px;
        bottom: 72px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0); /* задается прозрачность спана */
        `}

        &::before {
            content: "";
            display: block;
            width: 18px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;  
            transform: translateY(-6px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 18px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;  
            transform: translateY(6px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`

export const S = {
    MenuItem, 
    Link,
    DesktopMenu,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
}