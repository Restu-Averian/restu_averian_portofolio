import { createGlobalStyle } from "styled-components";
import baseTexture from "../../assets/base-texture.webp";

const GlobalStyled = createGlobalStyle`
    :root{
        --text-color-code:7,54,66;
        --icon-color-code:131,148,150;
        --bg-color-code:253,246,227;
        --bg-secondary-color-code:141,110,99;
        --text-color:rgba(var(--text-color-code));
        --icon-color:rgba(var(--icon-color-code));
        --bg-color:rgba(var(--bg-color-code));
        --bg-secondary-color:rgba(var(--bg-secondary-color-code));
    }

    body{
        background-color:var(--bg-color);
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
        -webkit-tap-highlight-color: transparent;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
`;

export default GlobalStyled;
