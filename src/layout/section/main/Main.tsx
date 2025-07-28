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

