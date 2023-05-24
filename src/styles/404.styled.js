import styled from "styled-components";
import back from "../assets/images/HOme/bg.svg";

export const FirstFold = styled.div`
/* background-image: url(${back});*/
background-size: cover;
background-repeat: no-repeat;
background-position: center center;

`
export const PageNotFound = styled.div`
height: 100vh;
display: flex;
background-color: #E7FFF8;
margin: auto;
justify-content: center;
flex-direction: column;
align-items: center;
`

export const HeroImage = styled.img`
max-width: 400px;
height: fit-content;
`