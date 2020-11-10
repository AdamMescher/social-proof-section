import styled from 'styled-components';

const StyledTestimonialCard = styled.li`
  height: 20rem;
  padding: 3.75rem 2.5rem 3.75rem 2.5rem;
  list-style: none;
  background: ${({ theme }) => theme.colors.primary.magenta};
  border-radius: ${({ theme }) => theme.borders.rounded.lg};
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    "img title"
    "text text";
  img {
    grid-area: img;
    align-self: center;
    border-radius: ${({theme}) => theme.borders.rounded.full};
    height: 40px;
  }
  .title-container {
    grid-area: title;
    align-self: center;
    margin-left: 2rem;
  }
  .name {
    color: ${({ theme }) => theme.colors.neutral.white};
    margin: 0;
    font-weight: ${({ theme }) => theme.typography.weights.bold};
  }
  p {
    color: ${({ theme }) => theme.colors.primary.pink};
    margin: 0;
  }
  blockquote {
    grid-area: text;
    margin: 2rem 0 0 0;
    color: ${({ theme }) => theme.colors.neutral.white};
  }
  blockquote:before {
    content: open-quote;
  }
  blockquote:after {
    content: close-quote;
  }
  &:nth-child(2) {
    margin-top: 1rem;
  }
  &:nth-child(3) {
    margin-top: 2rem;
  }
`;

export default StyledTestimonialCard;
