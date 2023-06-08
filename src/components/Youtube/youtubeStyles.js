import styled from "styled-components";

export const StyledYoutubeDiv = styled.section`
background: #000;
display: flex;
flex-direction: column;
margin: auto;
justify-content: center;
width: 100%;
align-items: center;
p {
font-family: ${(props) => props.theme.ChillFont};
font-size: ${(props) => props.theme.fsMedium};
text-align: center;
width: 75%;
}
@media only screen and (max-width: 600px) {
padding: 1rem;
p {
font-size: ${(props) => props.theme.fsSmall};
}
}
`

export const StyledVideoOverlay = styled.div`
position: relative;
.over{
background-color: rgba(0,0,0,.4);
position: absolute;
width: 100%;
height: 100%;
left: 0;
}
.playBtn {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(50%,-50%);
}

iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
    filter: grayscale(1);
}
`