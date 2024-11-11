import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from './../../../styles/Theme';

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <StyledForm>
                    <label>
                        <span>Name</span>
                        <Field/>
                    </label>
                    <label>
                        <span>Email</span>
                        <Field/>
                    </label>
                    <label>
                        <span>Message</span>
                        <Field as={"textarea"}/>
                    </label>
                    <ButtonContainer>
                        <Button type={"submit"}>Send</Button>
                    </ButtonContainer>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
`

const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; //для адаптива
    gap: 20px;
    margin: 0 auto;

    label {
        display: flex;
        flex-direction: column;
        width: 100%
    }

    span {
        font-weight: 600;
        font-size: 16px;
        color: ${theme.colors.accent};
        margin-bottom: 8px;
    }

    textarea {
        resize: none; //запрет на изменение размера
        height: 160px;
    }
`

const Field = styled.input`
    // стили для текста внутри инпута
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: ${theme.colors.accent};
    
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    padding: 8px 15px;
`

const ButtonContainer = styled.div`
    width: 100%; /* Задаем ширину 100%, чтобы контейнер кнопки занимал всю ширину формы */
    display: flex;
    justify-content: flex-end; 
`