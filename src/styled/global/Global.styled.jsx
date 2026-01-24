import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    :root{
        --primary-color-code: 30, 27, 75;
        --neo-brutalism-hover-solid:  8px 8px 0px 0px rgba(30, 27, 25);
        --btn-outline-hover:4px 4px 0px 0px #f8f5ff, 6px 6px 0px 0px #1e1b4b
    }

    body{
        background-color: #FAF5FF;
    }
    
    body,p,h1,h2,h3,h4,h5,h6,ul,ol {
        margin: 0;
    }

    ul,ol{
        margin-block:0;
        padding-inline: 0;
    }

    button{
        -webkit-tap-highlight-color: transparent;
    }
`;

export default GlobalStyled;
