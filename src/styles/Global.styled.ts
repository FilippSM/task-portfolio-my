import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    body {
        margin: 0;
        font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.font};
        min-width: 300px; /* окно после 300px идет маштабирование чтобы не появлялся горизонтальный скролл и и конки по одному */
    }

    .no-scroll {
        overflow: hidden;
        height: 100%;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        white-space: nowrap; //убрирает перенос слов
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        white-space: nowrap; //убрирает перенос слов
    }

    h1, 
    h2,
    h3 {
        color: ${theme.colors.accent};
    }

`
