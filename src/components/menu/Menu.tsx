import styled from "styled-components";
import { theme } from "../../styles/Theme";



export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <SytledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
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
        height: 40px;
        align-items: center;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`

const ListItem = styled.li`
    &:hover {
        transform: skewX(12deg);
    }
  /*   position: relative; */
`
const Link = styled.a`
    color: ${theme.colors.accent};
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.6;

    &:hover {
        /* color: white; */
        color: ${theme.colors.white};
        font-weight: 800;
        font-size: 22px;
    }
`