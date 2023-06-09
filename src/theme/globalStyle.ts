import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    body {
        height: 100vh;
        font-family: 'Inter';
    }

    #__next{
        height: 100%;
        position: relative;
    }

    button {
        cursor: pointer;
    }
`;
