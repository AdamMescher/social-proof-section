import styled from 'styled-components';

const StyledStarRatingCard = styled.div`
  margin-top: 10px;
  background: ${({ theme }) => theme.colors.neutral.magenta.lightGray};
  color: ${({ theme }) => theme.colors.primary.magenta};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  border-radius: ${({ theme }) => theme.borders.rounded.md};
  display: flex;
`;

export default StyledStarRatingCard;
