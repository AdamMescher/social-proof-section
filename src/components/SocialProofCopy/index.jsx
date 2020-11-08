import React from 'react';
import StyledSocialProofCopy from './styled';

const SocialProofCopy = ({ header, body }) => (
  <StyledSocialProofCopy>
    <h4>{header}</h4>
    <p>{body}</p>
  </StyledSocialProofCopy>
);

export default SocialProofCopy;
