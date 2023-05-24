import styled from "styled-components";
import { Link } from "gatsby";
export const NavbarStyled = styled.nav`
  width: 100%;
  display: flex;
  padding: 1rem 3rem;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-family: ${(props) => props.theme.secondaryFont};
    color: ${(props) => props.theme.secondaryColor};
    margin: auto;
    border-bottom: 5px solid #551a8b;
    font-size: 3rem;
  }
  /* Media Queries for Tablets */
  @media screen and (max-width: 800px) {
    padding: 1rem 2rem;
  }
  /* Media Queries for phone */
  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
`;

export const NavLink = styled(Link)`
font-family: ${props => props.theme.primaryFont};
color: inherit;
text-decoration: none;
letter-spacing: 1px;
`