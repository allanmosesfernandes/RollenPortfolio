import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap');

*,
*:before,
*:after {
    box-sizing: border-box;
}

body {
    font-family: ${props => props.theme.primaryFont};
}
`

export const theme = {
   primaryColor: "#000000",
   secondaryColor: "#0000ff",
   primaryFont: "'IBM Plex Mono', monospace",
}
