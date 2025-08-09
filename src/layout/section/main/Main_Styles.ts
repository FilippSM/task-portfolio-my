import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Link } from "react-scroll";

const StyledFlexWrapper = styled(FlexWrapper)`
    @media ${theme.media.tablet} {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

const Description = styled.div`
    margin-top: 110px;
    max-width: 508px;
    
    h2 {
        ${font({ weight: 700, Fmin: 42, Fmax: 64 })}
        font-family: "Roboto", sans-serif;
        line-height: 1.2;
    }

    p {
        font-weight: 400;
        font-size: 24px;
        line-height: 1.5;
        margin: 32px 0px;
    }

    @media ${theme.media.tablet} {
        margin-top: 0px;
    }
`

const MainTitle = styled.h1`
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: ${theme.colors.secondaryBg};
    margin-bottom: 12px;

    p {
        display: none;
    }
`


const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`

const commonButtonStyles = css`
  /* Общие стили */
  border-radius: 5px;
  width: 115px;
  height: 43px;
  transition: ${theme.animations.transition};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  cursor: pointer;
`;

const LinkProjects = styled(Link)`
  ${commonButtonStyles};
  border: none;
  background-color: ${theme.colors.secondaryBg};
  color: ${theme.colors.accent};

  &:hover {
    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.accent};
  }
`;

const LinkLinkedIn = styled(LinkProjects)`
  border: 2px solid ${theme.colors.accent};
  background-color: ${theme.colors.white};
  color: ${theme.colors.accent};

  &:hover {
    background-color: ${theme.colors.secondaryBg};
    border: none;
  }
`;

/* const LinkProjects = styled.a` */

// const LinkProjects = styled(Link)`
//     border: none;
//     border-radius: 5px;
//     width: 115px;
//     height: 43px;
//     background-color: ${theme.colors.secondaryBg};

//     transition: ${theme.animations.transition};
    
//     //выравнивание текста по уентру
//     display: flex; /* Используем flexbox для центрирования */
//     justify-content: center; /* Центрируем по горизонтали */
//     align-items: center; /* Центрируем по вертикали */

//     //стили текста
//     color: ${theme.colors.accent};
//     font-family: "Roboto", sans-serif;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 1.5;

//     &:hover {
//         background-color: ${theme.colors.white};
//         border: 2px solid ${theme.colors.accent};
//     }
// `
// //наследование
// const LinkLinkedIn = styled(LinkProjects)`
//     border: 2px solid ${theme.colors.accent};
//     background-color: ${theme.colors.white};
//     color: ${theme.colors.accent};

//     &:hover {
//         background-color: ${theme.colors.secondaryBg};
//         border: none;
//     }
// `

const Main = styled.div`
    position: relative;
    margin-top: -60px;
    display: flex; // чтобы контейнер был на всю высоту секции
    overflow: hidden;
    margin-bottom: 114px;

    @media ${theme.media.tablet} {
        margin-bottom: 80px;
    }

`

const ContainerImage = styled.div`
    position: relative;
    width: 600px;  
    /* height: 690px;  */
    
    @media ${theme.media.tablet} {
        width: 100%;
        margin-bottom: 60px;
    }
`

const Image = styled.img`
    width: 600px; 
    min-width: 300px; /* для маштабирования */

    @media ${theme.media.tablet} {
        margin-left: 0px;

        //конструкция чтобы картинка зпнимала всю ширину окна как в макете и игнорировала паддинги контейнера
        width: 100vw;
        margin-left: -15px;
    }
`

export const S = {
    StyledFlexWrapper,
    Description,
    MainTitle,
    ButtonGroup,
    LinkProjects,
    LinkLinkedIn,
    Main,
    ContainerImage,
    Image
}

