import styled from "styled-components";

import images from "../../assets/images/whatIdo/WHAT01.webp"
export const WhatIdoStyledSection = styled.section `
  background-color: #ffd02f;
  color: black;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  padding: 1rem;
`;


export const WhatIdoCards = styled.div `
  display: flex;
  flex-direction: column;
  background-color: #ffd02f;
`;

export const WhatIdoCardContainer = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr;

`
export const WhatIdoCard = styled.div `
  background: white;
  border-radius: 30px;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  cursor: pointer;

  .card-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.2s ease-in-out;
    h4 {
        font-family: 'chill';
        font-size: ${(props) => props.theme.fsSmall};
      }
    }
    .card-right {
      position: relative;
      transition: transform 0.2s ease-in-out; /* Added transition property */
        .card-right-bg {
        position: absolute;
        left: auto;
        top: auto;
        right: 0%;
        bottom: 0%;
        width: 60%;
        height: 100%;
        border-radius: 0.69em;
        background-color: rgba(5, 0, 56, 0.06);
        transition: all 0.5s ease-in-out; /* Added transition property */

        }
    }
    &:hover {
      .card-left {
        transform: translateX(5px);
      }
      .card-right img{
        transform: translateX(5px);
        transition: all 0.5s ease-in-out;
      }
      .card-right {
        .card-right-bg {
        width: 70%;
        transition: transform 0.4s ease-in-out; /* Added transition property */
        -webkit-transition: width 0.5s ease-in-out;
        -moz-transition: width 0.5s ease-in-out;
        -o-transition: width 0.5s ease-in-out;
        }
      }
    }

`