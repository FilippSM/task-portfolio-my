import styled from "styled-components";
import { theme } from "../../styles/Theme";
import React from "react";

export const Logo: React.FC = () => {
    return (
        <a>
            <StyledSpan>
                Filipp Samsonau
            </StyledSpan>
        </a>
    );
};

const StyledSpan = styled.span`
    font-size: 18px;
    line-height: 1.8;
    color: ${theme.colors.accent};
    font-family: "Comfortaa", sans-serif;
    font-weight: 700;
`