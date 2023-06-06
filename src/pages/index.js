import * as React from "react";
import hello from "../assets/images/HOme/hand.png"
import helloo from "../assets/images/HOme/helloo.png"
import { HomePageStyled, HomepageH2, VideoContainer, TypewriterDiv } from "../styles/HomepageStyles";
import { GlobalStyle } from "../styles/globalStyles";
import Artist from "../assets/images/HOme/artist.png";
import WhatIdo from "../components/whatIdo/WhatIdo";
import YoutubeVideo from "../components/youtubeVideo";
import Gradient from "../components/Gradient/Gradient";
import WhiteArr from "../assets/images/HOme/arrowBlock.svg";
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Gradient />
      <HomePageStyled className="wrapper">
        <div>
        <img src={helloo} alt="hello" className="hello"/> 

          {/* <HomepageH2>
            <img src={helloo} alt="hello" /> 
             <div></div>
            
              <span>
              <img src={hello} />
            </span>
          </HomepageH2> */}
          <p>
            I'm Rollen.
          </p>
          
          <img src={WhiteArr} alt="white arrow" className="arrow"/>
          <TypewriterDiv>
            a 
            <Typewriter
              options={{
                strings: [' Graphic Designer', ' Footballer', ' Afro Beat Specialist', ''],
                autoStart: true,
                loop: true,
              }}
            />
            {/* <span>
              <img className="smallImg" src={Artist} alt="artist" />
            </span>
            As a graphic designer , I have a keen eye for detail and a strong
            understanding of design principles, which allows me to create
            visually stunning and effective designs. */}
          </TypewriterDiv>
        </div>

      </HomePageStyled>
      <WhatIdo />
    </>
  );
}

// export const Head = () => <title>Home Page</title>

export const Head = () =>(
  <>
    <title>Rollen Fernandes</title>
  </>
)