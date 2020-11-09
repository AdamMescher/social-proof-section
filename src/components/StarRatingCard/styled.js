import styled from 'styled-components';

const StyledStarRatingCard = styled.div`
  padding: 1rem 2rem 1rem 2rem;
  margin-top: 1rem;
  background: ${({ theme }) => theme.colors.neutral.magenta.lightGray};
  color: ${({ theme }) => theme.colors.primary.magenta};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  border-radius: ${({ theme }) => theme.borders.rounded.lg};
  display: flex;
  .star-container {
    display: flex;
    align-items: center;
  }
  img {
    height: 1rem;
    margin-left: 0.5rem;
  }
  span {
    margin-left: 2.5rem;
  }
`;

export default StyledStarRatingCard;
