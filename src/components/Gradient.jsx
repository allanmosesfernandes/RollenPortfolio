import React from 'react'
import styled from "styled-components"
import Star from "../assets/images/Gradient/Star.svg";
import Globe from "../assets/images/Gradient/Globe.svg";

const GradientStyledDiv = styled.div`
background-image: linear-gradient(to right, #434343 0%, black 100%);
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

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