import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    .body {
        font-family: 'Oswald', sans-serif;
        color: ${({ theme }) => theme.colors.base_color};
        background-color: ${({ theme }) => theme.colors.gallery};
    }
`;