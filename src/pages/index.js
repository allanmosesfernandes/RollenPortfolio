import * as React from "react"
import { GlobalStyle, theme } from "../styles/globalStyles"
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";

export default function Home() {
  return <>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Layout></Layout>

    </ThemeProvider>

  </>
}

// export const Head = () => <title>Home Page</title>

export const Head = () =>(
  <>
    <title>Rollen Fernandes</title>
  </>
)