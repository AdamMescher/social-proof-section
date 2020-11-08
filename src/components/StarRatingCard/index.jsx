import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledStarRatingCard from './styled';
import starIcon from '../../assets/icons/icon-star.svg';

const StarRatingCard = ({ rating }) => (
  <StyledStarRatingCard>
    <div className="star-container" title={`${rating.value} out of 5 stars`}>
      {[...Array(rating.value)].map((star) => (
        <img key={uuidv4()} src={starIcon} alt="star icon" aria-hidden="true" />
      ))}
    </div>
    <div className="copy-container">
      <span>{`Rated ${rating.value} in ${rating.publication}`}</span>
    </div>
  </StyledStarRatingCard>
);

export default StarRatingCard;
