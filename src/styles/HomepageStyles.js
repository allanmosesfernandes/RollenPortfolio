import styled from "styled-components";

export const StyledH2 = styled.h2`
  font-family: ${(props) => props.theme.secondaryFont};
  font-size: ${(props) => props.theme.fsLG};
  letter-spacing: 1px;
  display: flex;
`;


export const HomepageH2 = styled(StyledH2)`
    align-items: center;
    &:before {
      content: "";
      width: 30px;
      height: 2px;
      margin-right: 10px;
      background-color: ${(props) => props.theme.neonGreen};
    }
  }
`;

export const HomePageStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  img {
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }

  .smallImg {
    width: 40px;
    height: 40px;
    margin: 0 10px;
  }
  p {
    font-family: ${(props) => props.theme.secondaryFont};
    font-size: ${(props) => props.theme.fsSmall};
    line-height: 1.5;
    letter-spacing: 1px;
  }
`;