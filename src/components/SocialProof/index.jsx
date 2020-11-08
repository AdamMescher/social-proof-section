import React from 'react';
import copy from '../../utils/copy';
import ratings from '../../utils/ratings';
import testimonials from '../../utils/testimonials';
import StyledSocialProof from './styled';
import SocialProofCopy from '../SocialProofCopy';
import TestimonialList from '../TestimonialList';
import StarRatingList from '../StarRatingList';

const SocialProof = () => {
  return (
    <StyledSocialProof>
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
      {/* <SocialProofCopy header={copy.header} body={copy.body} />
      <StarRatingList ratings={ratings} />
      <TestimonialList testimonials={testimonials} /> */}
    </StyledSocialProof>
  );
};

export default SocialProof;
