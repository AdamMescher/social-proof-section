import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledTestimonialList from './styled';
import TestimonialCard from '../TestimonialCard';

const TestimonialList = ({ testimonials }) => (
  <StyledTestimonialList>
    {testimonials.map((testimonial) => (
      <TestimonialCard key={uuidv4()} testimonial={testimonial} />
    ))}
  </StyledTestimonialList>
);

export default TestimonialList;
