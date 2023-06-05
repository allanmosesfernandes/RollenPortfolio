import React from 'react'
import styled from "styled-components"
import Star from "../assets/images/Gradient/10.png";
import Globe from "../assets/images/Gradient/11.png";
import eclipse from "../assets/images/Gradient/eclipse.png"
const GradientStyledDiv = styled.div`
background-image: linear-gradient(to right, #434343 0%, black 100%);
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: ${(props) => props.theme.nymphaFont};

h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing:3px;
    font-size: 8rem;
    background-image: url(${eclipse});
}

`
const Gradient = () => {
  return (
    <GradientStyledDiv>
        <h2>
            <span><img src={Star} alt="Star"/></span>43 Designs<span><img src={Globe} alt="Globe"/></span></h2>
    </GradientStyledDiv>
  )
}

export default Gradient