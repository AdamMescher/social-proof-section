import styled from 'styled-components';

const StyledStarRatingCard = styled.div`
  background: ${({ theme }) => theme.colors.neutral.magenta.lightGray};
  color: ${({ theme }) => theme.colors.primary.magenta};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  border-radius: ${({ theme }) => theme.borders.rounded.md};
  margin-top: 15px;
  padding: 15px;
  display: flex;
  width: 80%;
  .star-container {
    width: 35%;
    display: flex;
    justify-content: center;
  }
  img {
    margin-left: 10px;
    height: 15px;
  }
  .copy-container {
    width: 60%;
    display: flex;
    justify-content: flex-start;
    span {
      padding-left: 4rem;
    }
  }
  &:nth-child(1) {
    margin-right: 60px;
  }
  &:nth-child(2) {
    margin-right: 30px;
  }
`;

export default StyledStarRatingCard;
