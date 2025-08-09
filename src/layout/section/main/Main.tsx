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
                            <p>Frontend Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['Frontend Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                        <h2>Привет, меня зовут Самсонов Филипп</h2>
                        <p>Front-end разработчик с опытом 1+ года создания SPA с использованием React, TypeScript, Redux (RTK) и другими связанными библиотеками.</p>
                        <S.ButtonGroup>
                            {/* <S.LinkProjects href="projects">Projects</S.LinkProjects> */}
                            <S.LinkProjects 
                                to="projects" 
                                smooth={true} 
                            >
                                Projects
                            </S.LinkProjects>
                            <S.LinkLinkedIn
                                as="a" 
                                href="https://www.linkedin.com/in/филипп-самсонов-463734226">
                                LinkedIn
                                </S.LinkLinkedIn>
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

