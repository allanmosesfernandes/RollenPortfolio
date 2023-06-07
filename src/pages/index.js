import * as React from "react";
import hello from "../assets/images/HOme/hand.png"
import helloo from "../assets/images/HOme/helloo.png"
import namaste from "../assets/images/HOme/namaste.png"
import { HomePageStyled, HomepageH2, VideoContainer, TypewriterDiv, HelloDiv } from "../styles/HomepageStyles";
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
        <HelloDiv>
        <img src={namaste} alt="hello" className="hello"/> 
          <p className="rolley">
            I'm Rollen
          </p>
          
          <img src={WhiteArr} alt="white arrow" className="arrow"/>
          <TypewriterDiv>
            a
            <Typewriter
              options={{
                strings: [' graphic designer', ' footballer', ' afro beat specialist',],
                autoStart: true,
                loop: true,
              }}
            />
          </TypewriterDiv>
            <p>
              based out of Mumbai India, currently using my graphic design tools converting PSD files into live designs at Little Olive. 43 Designs is where all my design's live on the internet. <br /><br/>Before embarking on my graphic design journey I was (still am) a professional footballer and 43 was my very first jersey number and has been a constant ever since. <br /><br />Along with graphic design and football the final feather in my cap is music. I'm spinning up some sic beats in my free time and if you're into Afro beats you should check some of my mixes.
            </p>
        </HelloDiv>

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