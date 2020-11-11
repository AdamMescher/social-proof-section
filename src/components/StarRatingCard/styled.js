import styled from 'styled-components';

const StyledStarRatingCard = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sp4};
  :first-child {
    margin-top: 0;
  }
  background: ${({ theme }) => theme.colors.neutral.magenta.lightGray};
  color: ${({ theme }) => theme.colors.primary.magenta};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  border-radius: ${({ theme }) => theme.borders.rounded.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sp2};
  .star-container {
    display: flex;
    align-items: center;
    padding-left: ${({ theme }) => theme.spacing.sp4};
  }
  img {
    height: 20px;
    margin-left: ${({ theme }) => theme.spacing.sp2};
  }
  span {
    margin-top: ${({ theme }) => theme.spacing.sp2};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    span {
      margin-left: ${({ theme }) => theme.spacing.sp8};
      white-space: nowrap;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    padding: ${({ theme }) => theme.spacing.sp2};
    img {
      margin-left: ${({ theme }) => theme.spacing.sp1};
    }
    :nth-child(1) {
      margin-right: ${({ theme }) => theme.spacing.sp16};
    }
    :nth-child(2) {
      margin-left: ${({ theme }) => theme.spacing.sp8};
      margin-right: ${({ theme }) => theme.spacing.sp8};
    }
    :nth-child(3) {
      margin-left: ${({ theme }) => theme.spacing.sp16};
    }
  }
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.huge}) {
  }
`;

export default StyledStarRatingCard;
