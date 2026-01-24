import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    :root{
        --primary-color-code: 30, 27, 25;
        --neo-brutalism-hover-solid:  8px 8px 0px 0px rgba(30, 27, 25);
        --btn-outline-hover:4px 4px 0px 0px #f8f5ff, 6px 6px 0px 0px #1e1b4b
    }

    body{
        background-color: #FAF5FF;
    }
`;

export default GlobalStyled;
