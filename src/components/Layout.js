import React from 'react';
import "normalize.css";
import { Navbar } from './navbar/Navbar';
import Footer from "./footer/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/globalStyles";
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <>
        <Navbar />
          {children}
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default Layout