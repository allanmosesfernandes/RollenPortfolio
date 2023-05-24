import { createGlobalStyle } from "styled-components";
import Visual from "../assets/fonts/VisueltPro-Regular.ttf"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap');
@font-face {
    font-family: 'Visual';
    src: url(${Visual}) format('truetype');
}
*,
*:before,
*:after {
    box-sizing: border-box;
}

body {
    font-family: ${(props) => props.theme.primaryFont};
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
}

a {
    text-decoration: none;
}
.wrapper {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
}
`;

export const theme = {
    primaryColor: "#232428",
    secondaryColor: "#E0E0E0",
    primaryFont: "'IBM Plex Mono', monospace",
    secondaryFont: "Visual",
    fsXL: "5rem",
    fsLG: "4rem",
    fsMedium: "3rem",
    fsSmall: "2rem",
    fsXsmall: "1rem",
    
}
