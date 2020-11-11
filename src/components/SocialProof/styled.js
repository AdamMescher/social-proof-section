import styled from 'styled-components';
import bgPatternTopMobile from '../../assets/images/bg-pattern-top-mobile.svg';
import bgPatternBottomMobile from '../../assets/images/bg-pattern-bottom-mobile.svg';
import bgPatternTopDesktop from '../../assets/images/bg-pattern-top-desktop.svg';
import bgPatternBottomDesktop from '../../assets/images/bg-pattern-bottom-desktop.svg';

const StyledSocialProof = styled.section`
  background-image: url(${bgPatternTopMobile}), url(${bgPatternBottomMobile});
  background-position: top, bottom;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  background-size: 100%, auto 60vh;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'copy star'
      'testimonial testimonial';
    padding: 2rem;
    background-image: url(${bgPatternTopDesktop}),
      url(${bgPatternBottomDesktop});
    background-size: 10%, 10%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.huge}) {
  }
`;

export default StyledSocialProof;
