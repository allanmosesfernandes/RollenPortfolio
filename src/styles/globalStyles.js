import { createGlobalStyle } from "styled-components";
import Visual from "../assets/fonts/VisueltPro-Regular.ttf"
import PPReg from "../assets/fonts/PP Neue Machina - Free for Personal Use/PPRegular.otf"
import Migra from "../assets/fonts/Migra - Free for Personal Use/Migra-Extralight.ttf";
import Chill from "../assets/fonts/Chillax_Complete/Fonts/OTF/Chillax-Regular.otf";
import Nympha from "../assets/fonts/nympha/NymphaTrial-Light.ttf"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap');
@font-face {
    font-family: 'Visual';
    src: url(${Visual}) format('truetype');
     /* other formats include: 'woff2', 'truetype, 'opentype',
                            'embedded-opentype', and 'svg' */
}
@font-face {
    font-family: 'Nympha';
    src: url(${Nympha}) format('truetype');
     /* other formats include: 'woff2', 'truetype, 'opentype',
                            'embedded-opentype', and 'svg' */
}
@font-face {
    font-family: 'Machina';
    src: url(${PPReg}) format('opentype');
}
@font-face {
    font-family: 'Migra';
    src: url(${Migra}) format('truetype');
}

@font-face {
    font-family: 'Chill';
    src: url(${Chill}) format('opentype');
}
*,
*:before,
*:after {
    box-sizing: border-box;
}

body {
    font-family: ${(props) => props.theme.secondaryFont};
    background-color: #000;
    background-size: cover;
    color: ${(props) => props.theme.secondaryColor};
}

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

 img {
    max-width: 100%;
  }

a {
    text-decoration: none;
    border-bottom: 3px solid ${(props) => props.theme.neonGreen};
    color: inherit;
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
    purpleShade: "#551a8b",
    neonGreen: "#E8FF02",
    primaryFont: "'IBM Plex Mono', monospace",
    secondaryFont: "'Visual',monospace",
    machinaFont: "'Machina',monospace",
    migraFont: "'Migra',monospace",
    ChillFont: "'Chill',monospace",
    nymphaFont: "'Nympha',monospace",
    fsXXL: "8rem",
    fsXL: "5rem",
    fsLG: "4rem",
    fsMedium: "3rem",
    fsSmall: "1.2rem",
    fsXsmall: "1rem",
}


