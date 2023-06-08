import React from 'react'
import Marquee from "react-fast-marquee";
import styled from 'styled-components';
import Smiley from "../../assets/images/marquee/smile.svg"
const StyledDiv = styled.div`
font-family: ${(props) => props.theme.ChillFont};
font-size: ${(props) => props.theme.fsMedium};
color: black;
overflow: hidden;
display: flex;
gap: 2rem;
align-items: center;
justify-content: center;
.smiley-div {
    display: flex;
}
img {
    width: 50px;
    margin: auto 2rem;
}
img.inverted {
    transform: rotate(180deg);
}
`

const helloArray = Array(99).fill("Say Hello");

const MarqueeContainer = () => {
  return (
    <Marquee>
       <StyledDiv>
        {helloArray.map((hello, index) => (
          <div key={index}> 
          {
            <div className='smiley-div'>
            <img 
                src={Smiley} 
                alt="smiley" 
                className={index%2 === 0 ? "inverted" : ""}
            />{hello}</div>

          }
          </div>
        ))}
       </StyledDiv>
    </Marquee>
  )
}

export default MarqueeContainer