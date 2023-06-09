import styled from "styled-components";
import { Link } from "gatsby";
export const NavbarStyled = styled.nav`
  width: 100%;
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  margin: 1rem 0;

  button {
    margin-left: auto;
  }
  h2 {
    font-family: ${(props) => props.theme.migraFont};
    color: ${(props) => props.theme.secondaryColor};
    margin: auto;
    // border-bottom: 5px solid ${(props) => props.theme.neonGreen};
    font-size: ${(props) => props.theme.fsLG};

    span {
      color: #551a8b;
    }
  }

  /* Media Queries for Tablets */
  @media screen and (max-width: 800px) {
    padding: 1rem 2rem;
    h2 {
      font-size: ${(props) => props.theme.fsMedium};
    }
  }

  /* Media Queries for phone */
  @media screen and (max-width: 500px) {
    padding: 1rem;

    h2 {
      font-size: ${(props) => props.theme.fsSmall};
    }
  }
`;

export const NavLink = styled(Link)`
  font-family: ${(props) => props.theme.primaryFont};
  color: inherit;
  text-decoration: none;
  border-bottom: none;
  letter-spacing: 1px;

  /* Media Queries for Tablets */
  @media screen and (max-width: 800px) {
      font-size: ${(props) => props.theme.fsSmall};
  }

  /* Media Queries for phone */
  @media screen and (max-width: 500px) {
      font-size: ${(props) => props.theme.fsXsmall};
  }
`;