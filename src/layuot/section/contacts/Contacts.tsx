import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact me</SectionTitle>
            <StyledForm>
                <span>Name</span>
                <Field/>
                <span>Email</span>
                <Field/>
                <span>Message</span>
                <Field as={"textarea"}/>
                <Button type={"submit"}>Send</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    height: 50vh;
    background-color: #ba8bf8;
`

const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
`

const Field = styled.input`
    
`