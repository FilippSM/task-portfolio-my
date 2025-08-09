import { Icon } from "../../components/icon/Icon";
import yellowBgFooter from "../../assets/images/yellowBgFooter.svg";
import {S} from "./Footer_Styles";
import React from "react";


const socialItemsData = [
//  {
   //     iconId: "instagram",
   // }, 
    {
        iconId: "linkedin",
        href: "https://www.linkedin.com/in/филипп-самсонов-463734226"
    },
    {
        iconId: "envelope",
        href: "https://mail.google.com/mail/?view=cm&to=philipp.samsonau@gmail.com"
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <S.StyledFlexWrapper direction={"column"} align={"center"} justify={"space-between"}>
                <S.ContainerIcons>
                    <S.SocialList>
                        {socialItemsData.map((s, index) => {
                            return (
                                <S.SocialItem key={index}>
                                    <S.SocialLink href={s.href}>
                                        <Icon height={"48"} width={"48"} viewBox={"0 0 48 48"} iconId={s.iconId}/>
                                    </S.SocialLink>
                                </S.SocialItem>
                            )
                        })}
                    </S.SocialList>
                    <S.Copyright>© Filipp Samsonau 2024</S.Copyright>
                </S.ContainerIcons>
                <S.Image src={yellowBgFooter} alt="" />
            </S.StyledFlexWrapper>
        </S.Footer>
    );
};