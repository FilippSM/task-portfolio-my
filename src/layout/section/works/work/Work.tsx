import React from "react";
import {S} from "./../Works_Styles";
import Tilt from 'react-parallax-tilt';

type WorkPropsType = {
    title: string
    text: string
    src: string
    href: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
        >
            <S.Work>
            <S.Content>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.Link href={props.href}>Button</S.Link>
            </S.Content>
            <S.Image src={props.src} alt="" />
        </S.Work>
        </Tilt>
        
    );
};

