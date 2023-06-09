import React from 'react';
import { Link } from 'gatsby';
import { NavbarStyled, NavLink } from './navbarStyled'
import { GradientButton } from '../Gradient/GradientStyles';

export const Navbar = () => {

  return (
    <NavbarStyled>
      <GradientButton role="button">
        <span className="label-up">about</span>
        <span className="label-up">about</span>
      </GradientButton>
      {/* <NavLink to="about">(ABOUT)</NavLink>
      <Link to="/">
        <h2>Forty3 Designs<span>.</span></h2>
      </Link>
      <NavLink to="/">(WORK)</NavLink> */}
    </NavbarStyled>
  )
}
