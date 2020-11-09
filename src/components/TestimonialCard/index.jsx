import React from 'react';
import StyledTestimonialCard from './styled';

const TestimonialCard = ({ testimonial }) => (
  <StyledTestimonialCard>
    <img src={testimonial.headshot} alt={testimonial.name} />
    <div className="title">
      <h3>{testimonial.name}</h3>
      <p>Verified Buyer</p>
    </div>
    <blockquote>{testimonial.review}</blockquote>
  </StyledTestimonialCard>
);

export default TestimonialCard;
