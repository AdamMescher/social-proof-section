import styled from 'styled-components';

const StyledStarRatingCard = styled.div`
  padding: 20px 2rem 20px 2rem;
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
    height: 20px;
    margin-left: 8px;
  }
  span {
    margin-left: 2.5rem;
  }
  :nth-child(1){
    margin-right: 4rem;
  }
  :nth-child(2) {
    margin-right: 2rem;
    margin-left: 2rem;
  }
  :nth-child(3) {
    margin-left: 4rem;
  }
`;

export default StyledStarRatingCard;
