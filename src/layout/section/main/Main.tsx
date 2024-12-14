import image from "../../../assets/images/BG.png"
import { Container } from "../../../components/Container";
import React from "react";
import { S } from "./Main_Styles";
import Typewriter from 'typewriter-effect';


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <S.StyledFlexWrapper justify={"space-between"}>
                    <S.Description>
                        {/*   <h1>Software Developer</h1> */}
                        <S.MainTitle id={"about"}>
                            <p>Software Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['Software Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                        <h2>Hello, my name is Vahid Navazan</h2>
                        <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
                        <S.ButtonGroup>
                            <S.LinkProjects href="">Projects</S.LinkProjects>
                            <S.LinkLinkedIn href="">LinkedIn</S.LinkLinkedIn>
                        </S.ButtonGroup>
                    </S.Description>
                    <S.ContainerImage>
                        <S.Image src={image} />
                    </S.ContainerImage>
                </S.StyledFlexWrapper>
            </Container>
        </S.Main>
    );
};

