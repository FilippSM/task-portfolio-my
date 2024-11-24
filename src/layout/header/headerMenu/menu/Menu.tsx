import React from "react";
import {S} from "./../HeaderMenu_Styles"

/* const items = ["About", "Projects", "Contacts"]; */

const items = [
    {
        title: "About",
        href: "about"
    },
    {
        title: "Projects",
        href: "projects"
    },
    {
        title: "Contacts",
        href: "contact"
    },
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <S.MenuItem key={index}>
                        <S.NavLink 
                            activeClass="active" //закрепление класса при выборе
                            to={item.href}
                            smooth={true} //плавный переход
                            spy={true} //для отрисовки выбранного элемента
                        >
                            {item.title}
                        </S.NavLink>
                    </S.MenuItem>
                )
            })}
        </ul>
    );
};