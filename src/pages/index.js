import * as React from "react";
import Layout from "../components/Layout";
import hello from "../assets/images/HOme/hand.png"
import { FirstFold } from "../styles/404.styled";

export default function Home() {
  return<Layout>
      <section>
        <div>
          <h2>- Hello </h2>
          <img src={hello} />
          <p>
            I'm Rollen 
          </p>
        </div>
      </section>
    </Layout>
}

// export const Head = () => <title>Home Page</title>

export const Head = () =>(
  <>
    <title>Rollen Fernandes</title>
  </>
)