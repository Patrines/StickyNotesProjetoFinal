import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
//CSS
:root {
 --purple-300: #FFC3A0; 
 --purple-600: #FF6B6B; 
 --purple-900: #00CED1;

 --font-black: #FF6B6B;
 --font-white: #FFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
//1rem = 16px
@media(max-width:1080px) {
    font-size: 93.75%; // 1rem = 15px
}
@media(max-width: 720px) {
    font-size: 87.5%; // 1rem = 14px
}
}
`;