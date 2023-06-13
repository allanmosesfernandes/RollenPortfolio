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
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
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
      height: 85vh;
    }

    .rotating-globe {
      width: 50px;
    }
  }
`;

export const GradientButton = styled.button`
  font-family: ${(props) => props.theme.machinaFont};
  font-size: ${(props) => props.theme.fsSmall};
  background: transparent;
  border: none;
  outline: none;
  color: white;
  margin-left: auto;
  width: fit-content;
  border-radius: 50px;
  font-weight: bold;
  border: 2px solid white;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  position: relative;
  text-align: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  .label-up {
    display: block;
    margin: 0px 30px;
    height: 100%;
    position: relative;
    top: 0%;
    transition: 0.3s;
    font-size: 1rem;
  }

  &:hover .label-up {
    top: -100%;
    background-color: black;
  }

  @media screen and (max-width: 768px) {
    top: 0%;
    height: 30px;
    line-height: 30px;
    font-size: 1rem;
    text-transform: lowercase;
    .label-up {
    display: block;
    margin: 0px 15px;
    font-weight: normal;
    }
  }
`;
         
// https://www.youtube.com/embed/lsQqNL8k0nI