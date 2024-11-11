import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 1.5;
    color: ${theme.colors.accent};
    margin-bottom: 82px;

    position: relative;

    //стилизация полоски
    &::before {
        content: "";
        display: inline-block;
        width: 100px;
        height: 4px;
        background-color: ${theme.colors.secondaryBg};

        position: absolute;
        left: 50%;
        bottom: -4px;
        transform: translateX(-50%);
    }
`
