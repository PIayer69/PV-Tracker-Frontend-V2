import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nanum Gothic', sans-serif;
    }

    html, body, #root {
        height: 100%;
    }
`

export default GlobalStyles;