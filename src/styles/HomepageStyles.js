import styled from "styled-components";
import bottom from "../assets/images/HOme/bottom.png";

export const StyledH2 = styled.h2 `
  font-family: ${(props) => props.theme.ChillFont};
  font-size: ${(props) => props.theme.fsLG};
  letter-spacing: 1px;
  display: flex;
  margin: 5rem 0px 1rem 0;
  @media only screen and (max-width: 800px) {
    //code goes here
    font-size: ${(props) => props.theme.fsMedium};
  }
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

export const HelloDiv = styled.section `
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
.rolley{
  font-size: ${(props) => props.theme.fs2};
}
p {
    font-family: ${(props) => props.theme.ChillFont};
    font-size: ${(props) => props.theme.fsSmall};
    line-height: 1.5;
    letter-spacing: 1px;
    margin: 1rem 0;
    width: 75%;

    @media only screen and (max-width: 600px) {
      //code goes here
      width: 90%;
      font-size: ${(props) => props.theme.fsXsmall};
    }

}
`
export const TypewriterDiv = styled.div `
display: flex;
margin: 1rem 0 -0.4rem 0;
font-family: ${(props) => props.theme.nymphaFont};
font-size: ${(props) => props.theme.fs2};
.Typewriter {
  margin-left: 10px;
}

@media only screen and (max-width: 600px) {
font-size: ${(props) => props.theme.fsSmall};
}
`
export const HomePageStyled = styled.section `
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  min-height: 90vh;
  .hello {
    position: absolute;
    transform: rotate(270deg);
    transform-origin: right;
    right: 0;
    top: 0;
  }
  .arrow {
    width: 70px;
  }
  @media only screen and (max-width: 600px) {
    //code goes here
    grid-template-columns: 1fr;
  }
  .smallImg {
    width: 40px;
    height: 40px;
    margin: 0 10px;
  }
`;

export const VideoContainer = styled.div `
  display: flex;
  margin: auto;
  position: relative;
  overflow: hidden;
  width: 100%;
  filter: grayscale(1);
  transition: all 0.3s ease-in-out;
  &:hover {
    filter: grayscale(0);
  }

  @media only screen and (max-width: 600px) {
    //code goes here
    transform: scale(1);
    margin: auto auto 4rem auto;
    padding: 1rem;
  }
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