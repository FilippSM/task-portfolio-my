import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

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
    flex: 0 1 calc(16.66% - 16px);
  /*   width: 16.66%;  */
    background-color: #db8bf2;
    display: flex; /* Используем Flexbox для колонки */
    justify-content: center; /* Центрируем по горизонтали */
    align-items: center; /* Центрируем по вертикали */
    height: auto; /* Установите фиксированную высоту для вертикального центрирования */
    margin-bottom: 20px;

`