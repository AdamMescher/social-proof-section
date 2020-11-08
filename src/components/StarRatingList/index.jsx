import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import StarRatingCard from '../StarRatingCard';
import StyledStarRatingList from './styled';

const StarRatingList = ({ ratings }) => (
  <StyledStarRatingList>
    {ratings.map((rating) => (
      <StarRatingCard key={uuidv4()} rating={rating} />
    ))}
  </StyledStarRatingList>
);

export default StarRatingList;
