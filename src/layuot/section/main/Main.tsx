import styled from "styled-components";
import image from "../../../assets/images/Pic_1.webp"
import yellowBg from "../../../assets/images/yellow-bg.svg"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Background } from './../../../components/icon/Background';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <StyledDiv>
                    <h1>Software Developer</h1>
                    <h2>Hello, my name is Vahid Navazan</h2>
                    <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
                    <a href="">Projects</a>
                    <a href="">LinkedIn</a>
                </StyledDiv>

                <StyledContainer>
                    <svg width="0" height="0">
                        <defs>
                            <clipPath id="my-shape">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z" fill="#FDC435"/>
                                
                                    {/* <Background iconId={"yellowBgHead"} /> */}  
                            </clipPath>
                        </defs>
                    </svg>
                    <StyledSvg>
                        <rect width="100%" height="100%" />
                    </StyledSvg>
                    <StyledImage src={image}/>
                </StyledContainer>   
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledDiv = styled.div`
    p {
        max-width: 508px;
    }
`

const StyledMain = styled.div`
    min-height: 100vh;
    position: relative;
`

const StyledContainer = styled.div`
    position: relative;
    width: 720px;  /* Ширина контейнера */
    height: 630px; /* Высота контейнера */
    overflow: hidden;
`

const StyledImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-clip-path: url(#my-shape);
    clip-path: url(#my-shape);
    object-fit: cover; /* Сохраняем пропорции изображения */
`

const StyledSvg = styled.svg`
    position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            fill: #FDC435; /* Цвет SVG */
            -webkit-clip-path: url(#my-shape);
            clip-path: url(#my-shape);
`
