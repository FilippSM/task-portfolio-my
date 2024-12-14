import { Menu } from "../menu/Menu";
import React, { useState, useEffect } from "react";
import { S } from "./../HeaderMenu_Styles";

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    };


    //запретить скролл страницы при открытом бургер-меню
    useEffect(() => {
        if (menuIsOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        // Очистка эффекта
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [menuIsOpen]);

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen}>
                <Menu />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};



/* import { Menu } from "../menu/Menu";
import React, { useState } from "react";
import {S} from "./../HeaderMenu_Styles";


export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen}>
                <Menu/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

 */