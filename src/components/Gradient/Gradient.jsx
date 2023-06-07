import React from 'react'
import styled from "styled-components"
import Star from "../../assets/images/Gradient/10.png";
import Globe from "../../assets/images/Gradient/meshy.png";
import { GradientStyledDiv } from './GradientStyles';

const Gradient = () => {
  return (
    <GradientStyledDiv>

      <div className="border-div">
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
      </div>
    </GradientStyledDiv>
  );
}

export default Gradient