import styled from "styled-components";

export const StyledH2 = styled.h2 `
  font-family: ${(props) => props.theme.secondaryFont};
  font-size: ${(props) => props.theme.fsLG};
  letter-spacing: 1px;
  display: flex;
`;


export const HomepageH2 = styled(StyledH2)
`
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

export const HomePageStyled = styled.section `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  min-height: 80vh;
  @media only screen and (max-width: 600px) {
    //code goes here
    grid-template-columns: 1fr
  }
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

export const VideoContainer = styled.div `
  display: flex;
  margin: auto;
  position: relative;
  overflow: hidden;
  width: 100%;
  background:
    linear-gradient(to right, #E8FF02 4px, transparent 4px) 0 0,
    linear-gradient(to right, #E8FF02 4px, transparent 4px) 0 100%,
    linear-gradient(to left, #E8FF02 4px, transparent 4px) 100% 0,
    linear-gradient(to left, #E8FF02 4px, transparent 4px) 100% 100%,
    linear-gradient(to bottom, #E8FF02 4px, transparent 4px) 0 0,
    linear-gradient(to bottom, #E8FF02 4px, transparent 4px) 100% 0,
    linear-gradient(to top, #E8FF02 4px, transparent 4px) 0 100%,
    linear-gradient(to top, #E8FF02 4px, transparent 4px) 100% 100%;

  background-repeat: no-repeat;
  background-size: 20px 20px;
  padding: 2rem;
  .youtube-video {
    aspect-ratio: 16 / 9;
    width: 100%;
  }

  
`;