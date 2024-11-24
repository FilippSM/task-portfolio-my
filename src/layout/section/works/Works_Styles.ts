import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";

const StyledFlexWrapper = styled(FlexWrapper)`
    @media ${theme.media.mobile} {
        gap: 50px 0px;
    }
`;

const Works = styled.section`
    margin-bottom: 114px;

    @media ${theme.media.tablet} {
        margin-bottom: 80px;
    }
`

const Work = styled.div`
    display: flex;
    max-width: 992px;
    height: 524px;
    border-radius: 10px;
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1); //стили проета окна
    overflow: hidden;
   
    @media ${theme.media.mobile} {
        flex-direction: column-reverse;
        width: 100%;
        height: 1047px;
    }
`

const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.colors.white};
    padding: 0px 40px 0px 50px;

    @media ${theme.media.tablet} {
      /*   min-height: 521px; */
    
    }

    @media ${theme.media.mobile} {
        width: 100%;
        height: 50%;
        padding: 0px 28px 0px 35px;
    }
`

const Image = styled.img`
    width: 50%;
    object-fit: cover;

    @media ${theme.media.mobile} {
        width: 100%;
        height: 50%;
    }
`

const Title = styled.h3`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.5;
`
const Text = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    margin: 24px 0px;
`
const Link = styled.a`
    border: 1px solid ${theme.colors.accent};
    border-radius: 20px;
    width: 150px;
    height: 43px;
    background-color: ${theme.colors.white};

    transition: ${theme.animations.transition};
    
    //выравнивание текста по центру
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
        background-color: ${theme.colors.secondaryBg};
        border: none;
    }
`

export const S = {
    StyledFlexWrapper,
    Works,
    Work,
    Content,
    Image,
    Title,
    Text,
    Link
}