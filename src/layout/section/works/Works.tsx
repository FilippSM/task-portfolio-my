import { SectionTitle } from "../../../components/SectionTitle";
import { Work } from "./work/Work";
import projOne from "./../../../assets/images/Pic_1.png"
import projTwo from "./../../../assets/images/Pic_2.png"
import projFour from "./../../../assets/images/Pic_3.png"
import { Container } from "../../../components/Container";
import React from "react";
import {S} from "./Works_Styles";

const workData = [  
    {
        title: "Calculator",
        text: "Приложение по автоматизации расчётов для сотрудников, заменяющий рутинные вычисления в Excel/вручную",
        src: projOne,
        href: "https://filippsm.github.io/CalculatorReact/"
    },
    {
        title: "Mypixelgram",
        text: "Приложение для публикации фото и коротких постов: профиль, подписки, уведомления",
        src: projTwo,
        href: "https://github.com/dev47771/mypixelgram"
    },
    {
        title: "Ui-kit",
        text: "Библиотека React-компонент",
        src: projFour,
        href: "https://github.com/dev47771/mypixelgram-uikit"
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
                                href={w.href}
                            />
                        );
                    })}
                </S.StyledFlexWrapper>
            </Container>
        </S.Works>
    );
};

