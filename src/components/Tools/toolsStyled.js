import styled from "styled-components";
export const ToolsContainer = styled.div`
background-color: #e8ff02;
width: 100%;
position: relative;
padding: 3rem 0;
color: #000;

h2 {
font-family: 'chill';
font-size: ${(props) => props.theme.fsLG};
position: relative;

&:before {
    min-width: 410px;
    height: 3px;
    background: black;
    position: absolute;
    top: -10px;
}
}
`

export const ToolsContainerBodyCopy = styled.p`
width: 75%;
font-size: ${(props) => props.theme.fsSmall};
line-height: 1.5;
`

export const ToolsImages = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
width: 75%;
.iconText {
img {
    width: 50px;
    height: 50px;
    object-fit: contain;
}
text-align: center;
}

`