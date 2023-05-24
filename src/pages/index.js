import * as React from "react";
import Layout from "../components/Layout";
import hello from "../assets/images/HOme/hand.png"
import { FirstFold } from "../styles/404.styled";
import { HomePageStyled } from "../styles/HomepageStyles";
import { GlobalStyle } from "../styles/globalStyles";
export default function Home() {
  return<Layout>
    <GlobalStyle />
      <HomePageStyled className="wrapper">
          <div>
          <h2>Hello there<span><img src={hello} /></span></h2>
          <p>
            I'm Rollen Fernandes, a Graphic Designer based out of Mumbai, India currently pushing pixels at Little Olive <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce risus eros, ultricies id dolor volutpat, varius tempus dolor. Etiam id mattis massa. Vivamus turpis libero, consectetur et nisl id, ullamcorper gravida neque. Maecenas tristique turpis nec tincidunt condimentum. Sed sapien augue, condimentum quis nulla sed, blandit auctor felis. 
          </p>
          </div>

      </HomePageStyled>
    </Layout>
}

// export const Head = () => <title>Home Page</title>

export const Head = () =>(
  <>
    <title>Rollen Fernandes</title>
  </>
)