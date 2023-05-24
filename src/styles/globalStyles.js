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
    font-family: ${props => props.theme.primaryFont};
    background-color: ${props => props.theme.primaryColor};
}
`

export const theme = {
   primaryColor: "#000000",
   secondaryColor: "#7127BA",
   primaryFont: "'IBM Plex Mono', monospace",
   secondaryFont: "Visual"
}
