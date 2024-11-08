import styled from "styled-components";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt="" />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <StyledButton>Button</StyledButton>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: #bae5a0;
   /*  max-width: 992px;
    width: 100%; */

    max-width: 992px;
    width: 100%;
    gap: 30px;
   /*  max-height: 520px; */
   gap: 50px;
`

const Image = styled.img`
    width: 496px;
    height: 526px;
    object-fit: cover;
`

const Title = styled.h3`
    
`
const Text = styled.p`
    
`
const StyledButton = styled.button`
    
`