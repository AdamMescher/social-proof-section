import styled from 'styled-components';

const StyledStarRatingList = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: ${({ theme }) => theme.spacing.sp6} 0 5% 5%;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-area: star;
    margin: 0;
    margin-top: ${({ theme }) => theme.spacing.sp24};
  }
  @media (min-width: 1200px) {
    width: 80%;
    margin-left: 10%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.huge}) {
  }
`;

export default StyledStarRatingList;
