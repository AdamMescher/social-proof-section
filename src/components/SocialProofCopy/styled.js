import styled from 'styled-components';

const StyledSocialProofCopy = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sp20};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h4 {
    margin: 0;
    width: 70%;
    color: ${({ theme }) => theme.colors.primary.magenta};
    font-size: ${({ theme }) => theme.typography.sizes.xl3};
    line-height: ${({ theme }) => theme.typography.lineHeights.none};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tighter};
  }
  p {
    width: 85%;
    margin: ${({ theme }) => theme.spacing.sp5} 5% 0 5%;
    font-size: ${({ theme }) => theme.typography.sizes.base};
    color: ${({ theme }) => theme.colors.neutral.magenta.darkGray};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    h4 {
      width: 50%;
      font-size: ${({ theme }) => theme.typography.sizes.xl4};
    }
    p {
      width: 60%;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    h4 {
      width: 40%;
    }
    p {
      width: 55%;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: left;
    grid-area: copy;
    margin-left: 10%;
    h4 {
      width: 75%;
      font-size: ${({ theme }) => theme.typography.sizes.xl5};
      width: 100%;
    }
    p {
      width: 100%;
    }
  }
  @media (min-width: 1200px) {
    h4 {
      font-size: ${({ theme }) => theme.typography.sizes.xl6};
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.huge}) {
  }
`;

export default StyledSocialProofCopy;
