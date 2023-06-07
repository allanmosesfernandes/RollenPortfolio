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

&:after {
position: absolute;
content: "";
min-width: 400px;
height: 5px;
background: black;
bottom: 0;
left: 0;
}
@media only screen and (max-width: 800px) {
font-size: 3rem;
&:after {
position: absolute;
content: "";
min-width: 300px;
}
}
}
`

export const ToolsContainerBodyCopy = styled.p`
width: 75%;
font-size: ${(props) => props.theme.fsSmall};
line-height: 1.5;

@media only screen and (max-width: 800px) {
  //code goes here
  width: 100%;
}
`

export const ToolsImages = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
width: 75%;
margin-top: 3rem;
gap: 2rem 0;
@media only screen and (max-width: 800px) {
  //code goes here
  width: 100%;
}
.iconText {
img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    transition: all 0.3s ease-in-out;

    &:hover {
    transform: scale(1.2);
    cursor: pointer;
    }
}
text-align: center;
}

`