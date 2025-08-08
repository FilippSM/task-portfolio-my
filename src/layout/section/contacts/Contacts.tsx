import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import {S} from "./Contacts_Styles";
import emailjs from '@emailjs/browser';
import { ElementRef, FormEvent, useRef } from "react";


export const Contact: React.FC = () => {
    const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!form.current) return

    emailjs
      .sendForm(process.env.REACT_APP_YOUR_SERVICE_ID as string, process.env.REACT_APP_YOUR_TEMPLATE_ID as string, form.current, {
        publicKey: process.env.REACT_APP_YOUR_PUBLIC_KEY as string,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.currentTarget.reset() //очистка  формы после отправки
  };

    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <label>
                        <span>Name</span>
                        <S.Field required name={"user_name"}/>
                    </label>
                    <label>
                        <span>Email</span>
                        <S.Field required name={"email"}/>
                    </label>
                    <label>
                        <span>Subject</span>
                        <S.Field required name={"subject"}/>
                    </label>
                    <label>
                        <span>Message</span>
                        <S.Field required as={"textarea"} name={"message"}/>
                    </label>
                    <S.ButtonContainer>
                        <Button type={"submit"}>Send</Button>
                    </S.ButtonContainer>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};

