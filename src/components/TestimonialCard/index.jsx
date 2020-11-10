import React from 'react';
import StyledTestimonialCard from './styled';

const TestimonialCard = ({ testimonial }) => (
  <StyledTestimonialCard>
    <img src={testimonial.headshot} alt={testimonial.name} />
    <div className="title-container">
      <p className="name">{testimonial.name}</p>
      <p>Verified Buyer</p>
    </div>
    <blockquote>{testimonial.review}</blockquote>
  </StyledTestimonialCard>
);

export default TestimonialCard;
