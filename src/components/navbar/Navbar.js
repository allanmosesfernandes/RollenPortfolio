import React from 'react';
import { Link } from 'gatsby';
import { NavbarStyled, NavLink } from './navbarStyled'
export const Navbar = () => {
  return (
    <NavbarStyled>
      <NavLink to="about">(ABOUT)</NavLink>
      <Link to="/">
        <h2>Forty3 Designs.</h2>
      </Link>
      <NavLink to="/">(WORK)</NavLink>
      
    </NavbarStyled>
  )
}
