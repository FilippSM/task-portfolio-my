import styled from "styled-components";
/* import image from "../../../assets/images/Pic_1.webp" */
import image from "../../../assets/images/BG.png"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <StyledDiv>
                        <h1>Software Developer</h1>
                        <h2>Hello, my name is Vahid Navazan</h2>
                        <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
                        <ButtonGroup>
                            <LinkProjects href="">Projects</LinkProjects>
                            <LinkLinkedIn href="">LinkedIn</LinkLinkedIn>
                        </ButtonGroup>
                    </StyledDiv>

                    <StyledContainer>
                      {/*   <svg width="0" height="0">
                            <defs>
                                <clipPath id="my-shape">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z" fill="#FDC435" />
                                </clipPath>
                            </defs>
                        </svg>
                        <StyledSvg>
                            <rect width="100%" height="100%" />
                        </StyledSvg>
                        <StyledImage src={image} /> */}
                        <StyledImage src={image} />
                    </StyledContainer>
                </FlexWrapper>

            
            </Container>
            
        </StyledMain>
    );
};


const StyledDiv = styled.div`
    max-width: 508px;

    h1 {
        font-weight: 700;
        font-size: 20px;
        text-transform: uppercase;
        color: ${theme.colors.secondaryBg};
        margin-bottom: 12px;
    }

    h2 {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 64px;
        line-height: 1.2;
    }

    p {
        font-weight: 400;
        font-size: 24px;
        line-height: 1.5;
        margin: 32px 0px;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`

const LinkProjects = styled.a`
    border: none;
    border-radius: 5px;
    width: 115px;
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
//наследование
const LinkLinkedIn = styled(LinkProjects)`
    border: 2px solid ${theme.colors.accent};
    background-color: ${theme.colors.white};
    color: ${theme.colors.accent};

    &:hover {
        background-color: ${theme.colors.secondaryBg};
        border: none;
    }
`

const StyledMain = styled.div`
    position: relative;
    margin-top: -60px;
    display: flex; // чтобы контейнер был на всю высоту секции
    /* margin-left: 80px; */
    overflow: hidden;
`

const StyledContainer = styled.div`
    position: relative;
    width: 720px;  
    height: 690px; 




    
  /*   overflow: hidden; */
   /*  margin-left: 80px; */
`

const StyledImage = styled.img`
margin-left: 80px; /* Смещение вправо на 80 пикселей */
/* position: relative; 
left: 80px;  */
  /*   max-width: 720px; */
   /*  height: 630px; */
   /*  object-fit: cover;  */
`


/* const StyledImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-clip-path: url(#my-shape);
    clip-path: url(#my-shape);
    object-fit: cover; 
    
`

const StyledSvg = styled.svg`
    position: absolute;
        top: 0;
        left: 0;
        width: 700px;
        height: 100%;
        fill: #FDC435; 
        -webkit-clip-path: url(#my-shape);
        clip-path: url(#my-shape);
`
 */