import styled from "styled-components";

import images from "../../assets/images/whatIdo/WHAT01.webp"
export const WhatIdoStyledSection = styled.section`
  background-color: #ffd02f;
  color: black;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  padding: 1rem;
`;


export const WhatIdoCards = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffd02f;
`;

export const WhatIdoCardContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;

`
export const WhatIdoCard = styled.div`
  background: white;
  border-radius: 30px;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  .card-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`