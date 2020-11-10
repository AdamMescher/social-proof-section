import styled from 'styled-components';

const StyledSocialProofCopy = styled.div`
  color: ${({ theme }) => theme.colors.primary.magenta};
  grid-area: copy;
  width: 80%;
  h4 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes.xl6};
  }
  p {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    margin: 0;
  }
`;

export default StyledSocialProofCopy;
