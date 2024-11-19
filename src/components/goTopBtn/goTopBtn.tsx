import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const GoTopBtn = () => {
    return (
        <StyledGoTopBtn>
            <Icon iconId={"arrow"} width="16" height="15" viewBox="0 0 16 15"/>
        </StyledGoTopBtn>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: red;
    width: 30px;
    height: 30px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    border-radius: 50%;
    z-index: 700;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    cursor: pointer;

    &:hover {
        background-color: darkred;
    }
`