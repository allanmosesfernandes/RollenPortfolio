import React from 'react'
import { GlobalStyle } from '../../styles/globalStyles';
import { RightCard, WhatIdoCard, WhatIdoCardContainer, WhatIdoStyledSection } from './whatdostyled';
import { StyledH2 } from "../../styles/HomepageStyles";
import  image01  from "../../assets/images/whatIdo/WHAT01.webp";

const WhatIdo = () => {
  return (
    <WhatIdoStyledSection>
      <div className="wrapper">
        <div>
          <StyledH2>What I do:</StyledH2>
          <p>
            From graphic design to blah blah blah I do a lot of blah blah blah
            lEnim incididunt mollit ipsum culpa aliqua ea nulla tempor enim ut
            cillum velit.
          </p>
        </div>
        <WhatIdoCardContainer>
          <WhatIdoCard>
            <div className='card-left'>
              <h4>Catalogues</h4>
              <p>Eu amet minim cupidatat ex do ad fugiat officia.</p>
            </div>
            <div className='card-right'>
              <div className='card-right-bg'></div>
              <img src={image01} alt="card1" />
            </div>
          </WhatIdoCard>
        </WhatIdoCardContainer>
      </div>
    </WhatIdoStyledSection>
  );
}

export default WhatIdo