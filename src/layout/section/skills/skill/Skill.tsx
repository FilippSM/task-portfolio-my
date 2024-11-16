import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

type SkillPropsType = {
    iconId: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
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
    }

`