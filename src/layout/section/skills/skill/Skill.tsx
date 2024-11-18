import { Icon } from "../../../../components/icon/Icon";
import {S} from "../Skills_Styles"

type SkillPropsType = {
    iconId: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <Icon iconId={props.iconId}/>
        </S.Skill>
    );
};

