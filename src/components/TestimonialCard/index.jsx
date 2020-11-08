import React from 'react';
import StyledTestimonialCard from './styled';

const TestimonialCard = ({ testimonial }) => (
  <StyledTestimonialCard>
    <div className="tc-header-cont">
      <img src={testimonial.headshot} alt={testimonial.name} />
      <div className="tc-text-cont">
        <h3 className="name">{testimonial.name}</h3>
        <p className="subtitle">Verified Buyer</p>
      </div>
    </div>
    <div className="review-text-cont">
      <blockquote>{testimonial.review}</blockquote>
    </div>
  </StyledTestimonialCard>
);

export default TestimonialCard;
