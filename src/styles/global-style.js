import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 url('https://fonts.googleapis.com/css2?family=Roboto&family=Work+Sans&display=swap');
body {
    font-family: 'Work Sans', sans-serif;
    font-size: 18px;
    line-height: 1.5;
    padding-left: 30px;
    padding-right: 30px;
    border-style: solid;
}`;

export default GlobalStyle;
