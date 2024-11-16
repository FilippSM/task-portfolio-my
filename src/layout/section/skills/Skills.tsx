import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <StyledFlexWrapper wrap={"wrap"} justify={"space-between"} gap="74px 0px">
                    <Skill iconId={"vscode"} />
                    <Skill iconId={"js"} />
                    <Skill iconId={"css"} />
                    <Skill iconId={"html"} />
                    <Skill iconId={"greensock"} />
                    <Skill iconId={"vector"} />
                    <Skill iconId={"github"} />
                    <Skill iconId={"git"} />
                    <Skill iconId={"react"} />
                    <Skill iconId={"sass"} />
                    <Skill iconId={"bootstrap"} />
                    <Skill iconId={"tailwind"} />
                </StyledFlexWrapper>
            </Container>
        </StyledSkills>

    );
};

const StyledFlexWrapper = styled(FlexWrapper)`
    @media ${theme.media.tablet} {
        gap: 50px 0px;
    }
`;

const StyledSkills = styled.section`
    margin-bottom: 114px;

    @media ${theme.media.tablet} {
        margin-bottom: 80px;
    }
`