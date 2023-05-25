import * as React from "react";
import Layout from "../components/Layout";
import hello from "../assets/images/HOme/hand.png"
import { HomePageStyled, HomepageH2 } from "../styles/HomepageStyles";
import { GlobalStyle } from "../styles/globalStyles";
import Artist from "../assets/images/HOme/artist.png";
import WhatIdo from "../components/whatIdo/WhatIdo";

export default function Home() {
  return (
    <Layout>
      <GlobalStyle />
      <HomePageStyled>
        <div>
          <HomepageH2>
            Hello there
            <span>
              <img src={hello} />
            </span>
          </HomepageH2>
          <p>
            I'm Rollen Fernandes, a graphic Designer based out of Mumbai, India
            currently orchestrating pixel-perfect designs with finesse, and
            serving as a senior manager at{" "}
            <a
              className="squiggle"
              href="https://www.vanik.com/littleolive/home"
            >
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
        <div></div>
      </HomePageStyled>
      <WhatIdo />
    </Layout>
  );
}

// export const Head = () => <title>Home Page</title>

export const Head = () =>(
  <>
    <title>Rollen Fernandes</title>
  </>
)