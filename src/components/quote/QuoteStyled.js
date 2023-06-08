import styled from "styled-components";

export const QuoteStyledContainer = styled.div`
background: linear-gradient(220.55deg, #FFADF7 0%, #B1FF96 100%);
color: black;
`

export const QuoteStyledSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 3rem 0;
text-align: center;
font-family: ${(props) => props.theme.nymphaFont};
font-size: ${(props) => props.theme.fsXL};
line-height: 1.5;
letter-spacing: -1.0px;
text-transform: lowercase;
min-height: 90vh;

@media only screen and (max-width: 800px) {
font-size: ${(props) => props.theme.fsMedium};
}
img {
    margin: 2rem 0;
}
div {
    margin: auto;
}
span{
    font-style: italic;
    font-family: ${(props) => props.theme.nymphaRegular};
}
`

export const QuoteContainer = styled.div`
margin: 2rem 0;
`
export const QuoteFooter = styled.p`
text-transform: uppercase;
font-family: ${(props) => props.theme.ChillFont};
font-size: 1.5rem;
font-weight: bold;
margin-top: auto;
position: relative;

@media only screen and (max-width: 600px) {
font-size: ${(props) => props.theme.fsSmall};
}
`
// 