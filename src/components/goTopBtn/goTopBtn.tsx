import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll} from 'react-scroll';
import { useEffect, useState } from "react";

export const GoTopBtn = () => {
const [showBtn, setshowBtn] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200){
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        })
    })

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={()=>{scroll.scrollToTop()}}>
                <Icon iconId={"arrow"} width="16" height="15" viewBox="0 0 16 15"/>
                </StyledGoTopBtn>
            )}
        </>
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

    &:hover {
        background-color: darkred;
    }
`