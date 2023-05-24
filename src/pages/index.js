import * as React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../styles/globalStyles"
import Layout from "../components/Layout";

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