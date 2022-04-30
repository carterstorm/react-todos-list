import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    .body {
    font-family: 'Oswald', sans-serif;
    color: #001a33;
    background-color: ${({theme}) => theme.colors.gallery};
    }
`;