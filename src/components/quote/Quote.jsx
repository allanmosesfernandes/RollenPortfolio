import React from 'react';
import { QuoteContainer, QuoteFooter, QuoteStyledContainer, QuoteStyledSection } from './QuoteStyled';
import quotesIn from "../../assets/images/quotes/start.png";
import quotesOut from "../../assets/images/quotes/finish.png";
import line from "../../assets/images/quotes/line.svg";

const Quote = () => {
  return (
    <QuoteStyledContainer>
        <div className='wrapper'>
        <QuoteStyledSection>
        <img src={quotesIn} alt="quotation" />
        <QuoteContainer>
            <div><span>reality</span> IS </div>
            <div>CREATED <span>by</span> </div>
            <div>THE <span>mind</span></div>
        </QuoteContainer>
        <img src={quotesOut} alt="quotation" />
        <img src={line} alt="quotation" />

        <QuoteFooter>
            we can change our reality <br />by changing our mind.
        </QuoteFooter>
        </QuoteStyledSection>
        </div>

    </QuoteStyledContainer>
  )
}

export default Quote