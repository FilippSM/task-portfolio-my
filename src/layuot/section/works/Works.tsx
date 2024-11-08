import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import projOne from "./../../../assets/images/Pic_2.webp"
import projTwo from "./../../../assets/images/Pic_3.webp"
import projFour from "./../../../assets/images/Pic_4.webp"



export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>
                Projects
            </SectionTitle>
            <FlexWrapper direction={"column"} justify={"space-around"} gap={"30px"} align={"center"}>
                <Work title={"Project Name"}
                    text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."}
                    src={projOne}
                />
                <Work title={"Project Name"}
                    text={"What was your role, your deliverables, if the project was personal, freelancing."}
                    src={projTwo}
                />
                <Work title={"Project Name"}
                    text={"You can also add in this description the type of the project, if it was for web, mobile, electron."}
                    src={projFour}
                />
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #f8eeb2;
    
`
