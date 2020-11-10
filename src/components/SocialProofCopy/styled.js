import styled from 'styled-components';

const StyledSocialProofCopy = styled.div`
  color: ${({ theme }) => theme.colors.primary.magenta};
  grid-area: copy;
  h4 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes.xl6};
    line-height: ${({ theme }) => theme.typography.lineHeights.none};
    width: 60%;
  }
  p {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    margin: 2rem 0 0 0;
    width: 55%;
  }
  @media(max-width: 1450px) {
    h4 {
      font-size: ${({ theme }) => theme.typography.sizes.xl4};
    }
    p { font-size: ${({ theme }) => theme.typography.sizes.md}; }
  }
`;

export default StyledSocialProofCopy;
