import styled from "styled-components";
import eclipse from "../../assets/images/Gradient/a1.svg";

export const GradientStyledDiv = styled.div`
  background-image: linear-gradient(to bottom, black 0%, #434343 100%);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.nymphaFont};
  .rotating-globe {
    animation: rotate 30s infinite linear; /* Animation for continuous rotation */
    position: absolute;
    top: 0;
    right: 20%;
    width: 100px;
    border-radius: 50%;
    background: transparent;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg); /* Initial rotation angle */
    }
    to {
      transform: rotate(360deg); /* Final rotation angle */
    }
  }
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 3px;
    font-size: 8rem;

    .star {
      height: 100%;
      display: flex;
      margin: 0 1rem;
    }
  }
  .border-div {
    border-left: 2px solid white;
    border-right: 2px solid white;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
  }
  .eclipseDiv {
    position: relative;
    background-image: url(${eclipse});
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    width: fit-content;
    justify-content: center;
    background-size: contain;
    height: 500px;
  }
  @media screen and (max-width: 1200px) {
    h2 {
      font-size: ${(props) => props.theme.fsXL};
    }
  }
  @media screen and (max-width: 800px) {
    .eclipseDiv {
      height: 300px;
    }
    h2 {
      font-size: ${(props) => props.theme.fsMedium};
      text-align: center;
      .star {
        width: 30px;
        height: 30px;
      }
    }

    .border-div {
      width: 100%;
      border: none;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      height: 90%;
    }

    .rotating-globe {
        width: 50px;
    }
  }
`;
