import React from 'react'
import { QuoteStyledContainer } from './QuoteStyled'
import quotesIn from "../../assets/images/quotes/start.png"
import quotesOut from "../../assets/images/quotes/finish.png"

const Quote = () => {
  return (
    <QuoteStyledContainer>
        <img src={quotesIn} alt="quotation" />
        <h4>
            Reality IS CREATED BY 
            THE Mind
        </h4>
    </QuoteStyledContainer>
  )
}

export default Quote