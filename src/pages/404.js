import React from 'react';
import { Link } from 'gatsby';
import { PageNotFound, HeroImage } from '../styles/404.styled';
import Pirate from "../assets/images/404/pirate.png";


const NotFound = () => {
  return (
    <PageNotFound>
        <HeroImage src={Pirate} alt="Pirate searching" />
        <h3>No Results Found</h3>
        <p>We couldn't find what you're searching for:
            <Link to="/">Go back home</Link>
        </p>
    </PageNotFound>
  )
}

export default NotFound