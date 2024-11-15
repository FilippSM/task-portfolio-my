import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Content>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href="">Button</Link>
            </Content>
            <Image src={props.src} alt="" />
        </StyledWork>
    );
};

const StyledWork = styled.div`
    display: flex;
    max-width: 992px;
    height: 524px;
    border-radius: 10px;
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1); //стили проета окна
    overflow: hidden;
`

const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.colors.white};
    padding: 0px 50px 0px 40px;
`

const Image = styled.img`
    width: 50%;
    object-fit: cover;
`

const Title = styled.h3`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.5;
`
const Text = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    margin: 24px 0px;
`
const Link = styled.a`
    border: 1px solid ${theme.colors.accent};
    border-radius: 20px;
    width: 150px;
    height: 43px;
    background-color: ${theme.colors.white};
    
    //выравнивание текста по уентру
    display: flex; /* Используем flexbox для центрирования */
    justify-content: center; /* Центрируем по горизонтали */
    align-items: center; /* Центрируем по вертикали */

    //стили текста
    color: ${theme.colors.accent};
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;

    &:hover {
        background-color: ${theme.colors.secondaryBg};
        border: none;
    }
`