import styled from 'styled-components';

const StyledSocialProof = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "copy star"
    "testimonial testimonial";
  padding: 2rem;
`;

export default StyledSocialProof;
