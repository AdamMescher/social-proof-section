import styled from 'styled-components';

const StyledSocialProof = styled.section`
  --top-pad: 5rem;
  --bot-pad: 5rem;
  --left-pad: 5rem;
  --right-pad: 5rem;
  display: grid;
  grid-template-columns: var(--left-pad) 1fr 1fr var(--right-pad);
  grid-template-rows: var(--top-pad) 1fr 1fr var(--bot-pad);
  grid-template-areas:
    'padding padding padding padding'
    'padding copy star-cards padding'
    'padding  testimonial-cards testimonial-cards padding'
    'padding padding padding padding';

  .one {
    grid-area: copy;
    background: red;
  }

  .two {
    grid-area: star-cards;
    background: blue;
  }

  .three {
    grid-area: testimonial-cards;
    background: yellow;
  }
`;

export default StyledSocialProof;
