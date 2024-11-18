import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    width: 89px;
    height: 43px;
    background-color: ${theme.colors.secondaryBg};
    
    //выравнивание текста по уентру
    display: flex; /* Используем flexbox для центрирования */
    justify-content: center; /* Центрируем по горизонтали */
    align-items: center; /* Центрируем по вертикали */

    //стили текста
    color: ${theme.colors.accent};
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;

    &:hover {
        background-color: ${theme.colors.white};
        border: 2px solid ${theme.colors.accent};
    }
`