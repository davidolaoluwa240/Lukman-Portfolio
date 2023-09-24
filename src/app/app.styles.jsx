// Modules
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    &::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --primary-color:#212121;
    }

    html {
        font-size: 62.5%;
    }

    body {
        width: 100%;
        height: 100vh;
        font-size: 1.6rem;
        line-height: 1.5rem;
        font-family: Studio Feixen Edgy TRIAL;
        color: var(--primary-color);
    }

    a {
        text-decoration: none;
        font: inherit;
        color: inherit;
    }

    ul {
        padding: 0;
        list-style: none;
    }
`;
