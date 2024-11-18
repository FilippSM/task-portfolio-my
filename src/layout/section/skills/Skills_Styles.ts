import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";

const StyledFlexWrapper = styled(FlexWrapper)`
    @media ${theme.media.tablet} {
        gap: 50px 0px;
    }
`;

const Skills = styled.section`
    margin-bottom: 114px;

    @media ${theme.media.tablet} {
        margin-bottom: 80px;
    }
`

const Skill = styled.div`
    flex: 0 1 16.66%;
    


    display: flex; /* Используем Flexbox для колонки */
    justify-content: center; /* Центрируем по горизонтали */
    align-items: center; /* Центрируем по вертикали */
    height: auto; /* Установите фиксированную высоту для вертикального центрирования */
    margin-bottom: 20px;


    @media ${theme.media.tablet} {
        flex: 0 1 25.0%;;
    }

    @media ${theme.media.mobile} {
        flex: 0 1 30.0%;;
    }

    @media screen and (max-width: 400px) {
        flex: 0 1 50.0%;;
    }`

export const S = {
    StyledFlexWrapper,
    Skills,
    Skill
}