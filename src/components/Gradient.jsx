import React from 'react'
import styled from "styled-components"
import Star from "../assets/images/Gradient/10.png";
import Globe from "../assets/images/Gradient/11.png";
import eclipse from "../assets/images/Gradient/d.svg";

const GradientStyledDiv = styled.div`
background-image: linear-gradient(to right, black 0%, #434343 100%);
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: ${(props) => props.theme.nymphaFont};
perspective: 1000px;
.rotating-image {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d; /* Ensures the child elements maintain their 3D position */
  animation: rotate 5s infinite linear; /* Animation for continuous rotation */
}
@keyframes rotate {
  from {
    transform: rotateY(0deg); /* Initial rotation angle */
  }
  to {
    transform: rotateY(360deg); /* Final rotation angle */
  }
}
h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing:3px;
    font-size: 8rem;
    background-image: url(${eclipse});

    .star {
        height: 100%;
        display: flex;
        margin: 0 1rem;
    }
}

`
const Gradient = () => {
  return (
    <GradientStyledDiv>
        <img src={Globe} alt="rotating" className='rotating-image'/>
        <h2>
            <span><img src={Star} alt="Star" className="star" /></span> 43 Designs <span><img src={Star} alt="Globe" className="star"/></span>
        </h2>
    </GradientStyledDiv>
  )
}

export default Gradient