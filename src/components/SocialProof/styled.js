import styled from 'styled-components';
import blobOne from '../../assets/images/bg-pattern-bottom-desktop.svg';
import blobTwo from '../../assets/images/bg-pattern-top-desktop.svg';

const StyledSocialProof = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "copy star"
    "testimonial testimonial";
  padding: 2rem;
  background-image: url(${blobOne}), url(${blobTwo});
  background-position: right bottom, top left;
  background-repeat: no-repeat;
  background-size: 75%, 40%;
`;

export default StyledSocialProof;
