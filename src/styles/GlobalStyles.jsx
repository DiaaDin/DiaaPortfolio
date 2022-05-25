import { createGlobalStyle } from "styled-components";

import "@fontsource/josefin-sans";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/500.css";
import "@fontsource/josefin-sans/600.css";
import "@fontsource/josefin-sans/700.css";
import "@fontsource/kaushan-script";
export const GlobalStyle = createGlobalStyle`

    :root{
    /*colors*/
    --maincolor: #4887df;
    --seccolor: #DDDDDD;
    --linkcolor:#eeeeee;
    --black: #000000;
}

html{
    font-size: 10px;
}

body{
    font-family: "Josefin Sans";
    background-color: var(--seccolor);
    color: var(--maincolor);
    transition: background-color .3s ease;
}

*, *::after, *::before{
    margin: 0; padding: 0; 
    box-sizing: border-box;
}
a{
    text-decoration: none;
    cursor: pointer;
}
ul, li{
    list-style: none;
}

img, svg{
    width: 100%;
    height: 100%;
}

.container{
    max-width: 1200px;
  width: 85%;
  margin: 0 auto;
}
`;
