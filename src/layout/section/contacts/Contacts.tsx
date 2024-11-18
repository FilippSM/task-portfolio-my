import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import {S} from "./Contacts_Styles"


export const Contact = () => {
    return (
        <S.Contacts>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <S.Form>
                    <label>
                        <span>Name</span>
                        <S.Field/>
                    </label>
                    <label>
                        <span>Email</span>
                        <S.Field/>
                    </label>
                    <label>
                        <span>Message</span>
                        <S.Field as={"textarea"}/>
                    </label>
                    <S.ButtonContainer>
                        <Button type={"submit"}>Send</Button>
                    </S.ButtonContainer>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};

