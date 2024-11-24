import { SectionTitle } from "../../../components/SectionTitle";
import { Work } from "./work/Work";
import projOne from "./../../../assets/images/Pic_2.webp"
import projTwo from "./../../../assets/images/Pic_3.webp"
import projFour from "./../../../assets/images/Pic_4.webp"
import { Container } from "../../../components/Container";
import React from "react";
import {S} from "./Works_Styles";

const workData = [
    {
        title: "Project Name",
        text: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
        src: projOne
    },
    {
        title: "Project Name",
        text: "What was your role, your deliverables, if the project was personal, freelancing.",
        src: projTwo
    },
    {
        title: "Project Name",
        text: "You can also add in this description the type of the project, if it was for web, mobile, electron.",
        src: projFour
    }

]

export const Works: React.FC = () => {
    return (
        <S.Works id={"projects"}>
            <Container>
                <SectionTitle>
                    Projects
                </SectionTitle>
                <S.StyledFlexWrapper direction={"column"} justify={"space-around"} gap={"80px"} align={"center"}>

                    {workData.map((w, index) => {
                        return (
                            <Work 
                                title={w.title}
                                text={w.text}
                                src={w.src}
                                key={index}
                            />
                        );
                    })}
                </S.StyledFlexWrapper>
            </Container>
        </S.Works>
    );
};

