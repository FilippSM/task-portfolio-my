import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import {S} from "./Skills_Styles"

/* const skillData = [
    "vscode", "js", "css", "html", "greensock", "vector","github", "git", "react", "sass","bootstrap", "tailwind"
] */
const skillData = [
    "vscode", "js", "css", "html", "git", "react", "sass"
]

export const Skills = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <S.StyledFlexWrapper wrap={"wrap"} justify={"space-between"} gap="74px 0px">
                    {skillData.map((s, index) => {
                        return (               
                                <Skill iconId={s} key={index}>
                                    <div>{s}</div>        
                                </Skill>
                              
                        )
                    })}
                </S.StyledFlexWrapper>
            </Container>
        </S.Skills>
    );
};