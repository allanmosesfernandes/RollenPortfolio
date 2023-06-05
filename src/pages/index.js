import * as React from "react";
import hello from "../assets/images/HOme/hand.png"
import { HomePageStyled, HomepageH2, VideoContainer } from "../styles/HomepageStyles";
import { GlobalStyle } from "../styles/globalStyles";
import Artist from "../assets/images/HOme/artist.png";
import WhatIdo from "../components/whatIdo/WhatIdo";
import YoutubeVideo from "../components/youtubeVideo";
import Gradient from "../components/Gradient";
export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Gradient />
      <HomePageStyled className="wrapper">
        <div>
          <HomepageH2>
            Hello there
             <div></div>
            
              <span>
              <img src={hello} />
            </span>
          </HomepageH2>
          <p>
            I'm Rollen Fernandes, a graphic Designer based out of Mumbai, India
            currently orchestrating pixel-perfect designs with finesse, and
            serving as a senior manager at{" "}
            <a className="squiggle" href="https://www.vanik.com/littleolive/home">
              Little Olive.
            </a>
          </p>
          <p>
            <span>
              <img className="smallImg" src={Artist} alt="artist" />
            </span>
            As a graphic designer , I have a keen eye for detail and a strong
            understanding of design principles, which allows me to create
            visually stunning and effective designs.
          </p>
        </div>
        <VideoContainer>
          <YoutubeVideo 
            src={`https://www.youtube.com/embed/1CRjyUHXUek`}
            title={'Homepage Video'} />

        </VideoContainer>
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