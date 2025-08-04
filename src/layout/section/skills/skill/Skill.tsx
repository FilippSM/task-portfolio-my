import { Icon } from "../../../../components/icon/Icon";
import {S} from "../Skills_Styles"

type SkillPropsType = {
    iconId: string
    children?: React.ReactNode; 
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <Icon iconId={props.iconId}/>
            {props.children} 
        </S.Skill>
    );
};

