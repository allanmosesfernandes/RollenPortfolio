import React from 'react'
import styled from "styled-components"
import Star from "../assets/images/Gradient/10.png";
import Globe from "../assets/images/Gradient/black.png";
import eclipse from "../assets/images/Gradient/a1.svg";

const GradientStyledDiv = styled.div`
  background-image: linear-gradient(to bottom, black 0%, #434343 100%);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.nymphaFont};
  .rotating-globe {
    animation: rotate 50s infinite linear; /* Animation for continuous rotation */
    position: absolute;
    top: 0;
    right: 20%;
    width: 100px;
    border-radius: 50%;
    background: rgb(224, 224, 224);
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg); /* Initial rotation angle */
    }
    to {
      transform: rotate(360deg); /* Final rotation angle */
    }
  }
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 3px;
    font-size: 8rem;

    .star {
      height: 100%;
      display: flex;
      margin: 0 1rem;
    }
  }
  .eclipseDiv {
    position: relative;
    background-image: url(${eclipse});
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    width: fit-content;
    justify-content: center;
    background-size: contain;
    min-height: 500px;
  }
`;
const Gradient = () => {
  return (
    <GradientStyledDiv>
      <div className="eclipseDiv">
        <img src={Globe} alt="Rotating Globe" className="rotating-globe" />
        <h2>
          <span>
            <img src={Star} alt="Star" className="star" />
          </span>{" "}
          43 Designs{" "}
          <span>
            <img src={Star} alt="Globe" className="star" />
          </span>
        </h2>
      </div>
    </GradientStyledDiv>
  );
}

export default Gradient