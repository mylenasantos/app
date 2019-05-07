import { createGlobalStyle } from "styled-components";
import "font-awesome/css/font-awesome.css";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        background-color: #f8bbd0;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased;
        font-family: sans-serif;


    }
`;
