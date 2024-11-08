import styled from "styled-components";



export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <SytledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href="">{item}</a>
                        </li>
                    )
                })}
            </ul>
        </SytledMenu>
    );
};

const SytledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`