import * as React from "react";
import Layout from "../components/Layout";
import bg from "../assets/images/HOme/bg.svg"
import { FirstFold } from "../styles/404.styled";


export default function Home() {
  return <FirstFold>
  
    <Layout>
      <h2>THis is homepage</h2>
    </Layout>
  </FirstFold>
}

// export const Head = () => <title>Home Page</title>

export const Head = () =>(
  <>
    <title>Rollen Fernandes</title>
  </>
)