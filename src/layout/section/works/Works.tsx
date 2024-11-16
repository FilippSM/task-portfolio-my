import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import projOne from "./../../../assets/images/Pic_2.webp"
import projTwo from "./../../../assets/images/Pic_3.webp"
import projFour from "./../../../assets/images/Pic_4.webp"
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";



export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>
                    Projects
                </SectionTitle>
                <StyledFlexWrapper direction={"column"} justify={"space-around"} gap={"80px"} align={"center"}>
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
                </StyledFlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledFlexWrapper = styled(FlexWrapper)`
    @media ${theme.media.mobile} {
        gap: 50px 0px;
    }
`;


const StyledWorks = styled.section`
    margin-bottom: 114px;

    @media ${theme.media.tablet} {
        margin-bottom: 80px;
    }
`
