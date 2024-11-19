import React from "react";
import {S} from "./../HeaderMenu_Styles"

const items = ["About", "Projects", "Contacts"];

export const Menu: React.FC = () => {
    return (

        <ul>
            {items.map((item, index) => {
                return (
                    <S.MenuItem key={index}>
                        <S.Link href="">{item}</S.Link>
                    </S.MenuItem>
                )
            })}
        </ul>
    );
};