import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import {S} from "./Skills_Styles"

const skillData = [
    "html", "css", "Javascript", "Typescript", "react", "Next.js", "Module CSS", "scss", "Styled-components", "tailwind", "Redux Toolkit", "RTK Query", "Zustand", "React Router", "React Hook Form", "Zod", "Rest API", 
    "GraphQL", "Axios", "WebSockets", "Jest", "Storybook", "FSD", "Git", "GitHub", "GitLab", "Material UI", "Radix"
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