import styled from 'styled-components';

const StyledTestimonialCard = styled.li`
  height: 20rem;
  list-style: none;
  background: ${({ theme }) => theme.colors.primary.magenta};
  border-radius: ${({ theme }) => theme.borders.rounded.lg};
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas: "img title" "text text";
  img {
    grid-area: img;
    align-self: center;
    border-radius: ${({theme}) => theme.borders.rounded.full};
  }
  .title {
    grid-area: title;
    align-self: center;
    h3, p {
      margin: 0;
    }
  }
  blockquote {
    grid-area: text;
  }
  blockquote:before {
    content: open-quote;
  }
  blockquote:after {
    content: close-quote;
  }
`;

export default StyledTestimonialCard;
