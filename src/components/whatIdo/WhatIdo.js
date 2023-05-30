import React from 'react'
import { GlobalStyle } from '../../styles/globalStyles';
import { RightCard, WhatIdoCard, WhatIdoCardContainer, WhatIdoParagraph, WhatIdoStyledSection } from './whatdostyled';
import { StyledH2 } from "../../styles/HomepageStyles";
import image01 from "../../assets/images/whatIdo/WHAT01.webp";
import image02 from "../../assets/images/whatIdo/WHAT02.webp";
import image03 from "../../assets/images/whatIdo/WHAT03.webp";
import Arrow from "../../assets/images/whatIdo/Arrow-right.svg"
import { Link } from 'gatsby';

const WhatIdo = () => {
  return (
    <WhatIdoStyledSection>
      <div className="wrapper">
        <div>
          <StyledH2>What I do:</StyledH2>
          <WhatIdoParagraph>
            From graphic design to Exercitation qui adipisicing ullamco ullamco eiusmod ad adipisicing amet anim elit culpa excepteur velit. Id do laborum culpa proident elit. In et voluptate culpa eu nostrud irure est reprehenderit irure labore. Tempor eu minim proident ullamco. Nisi nulla voluptate ut id sit aliqua deserunt.
          </WhatIdoParagraph>
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
              <Link to="https://www.behance.net/rollenfernandes1" target="_blank">
                <img src={Arrow} alt="Link arrow" />
              </Link>
            </div>
          </WhatIdoCard>
          <WhatIdoCard>
            <div className='card-left'>
              <h4>Poster Designs</h4>
              <p>Eu amet minim cupidatat ex do ad fugiat officia.</p>
            </div>
            <div className='card-right'>
              <div className='card-right-bg'></div>
              <img src={image02} alt="card1" />
              <Link to="https://www.behance.net/rollenfernandes1">
                <img src={Arrow} alt="Link arrow" />
              </Link>
            </div>
          </WhatIdoCard>
          <WhatIdoCard>
            <div className='card-left'>
              <h4>Motion Graphics</h4>
              <p>Eu amet minim cupidatat ex do ad fugiat officia.</p>
            </div>
            <div className='card-right'>
              <div className='card-right-bg'></div>
              <img src={image03} alt="card1" />
              <Link to="https://www.behance.net/rollenfernandes1">
                <img src={Arrow} alt="Link arrow" />
              </Link>
            </div>
          </WhatIdoCard>
        </WhatIdoCardContainer>
      </div>
    </WhatIdoStyledSection>
  );
}

export default WhatIdo