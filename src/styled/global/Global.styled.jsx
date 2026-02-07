import { createGlobalStyle } from "styled-components";
import baseTexture from "../../assets/base-texture.webp";

const GlobalStyled = createGlobalStyle`
    :root{
        --primary-color-code: 30, 27, 75;
        --neo-brutalism-hover-solid:  8px 8px 0px 0px rgba(30, 27, 25);
        --btn-outline-hover:4px 4px 0px 0px #f8f5ff, 6px 6px 0px 0px #1e1b4b
    }

    body{
        background-color: #FDF6E3;
        -webkit-font-smoothing: antialiased; 
        -moz-osx-font-smoothing: grayscale;
        background-image: url(${baseTexture});
        background-repeat: repeat;
    }
    
    body,p,h1,h2,h3,h4,h5,h6,ul,ol {
        margin: 0;
    }

    ul,ol{
        margin-block:0;
        padding-inline: 0;

        li{
            list-style: none;
        }
    }

    figure{
        margin: unset;
    }

    

    button {
        -webkit-tap-highlight-color: transparent;
        all: unset;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-sizing: border-box;
        font-family: inherit;
        color: inherit;
        outline: revert;
    }

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
`;

export default GlobalStyled;
