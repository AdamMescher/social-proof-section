import styled from 'styled-components';

const StyledTestimonialCard = styled.li`
  margin-top: ${({ theme }) => theme.spacing.sp4};
  :first-child {
    margin-top: 0;
  }
  list-style: none;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas: 'img title' 'text text';
  background: ${({ theme }) => theme.colors.primary.magenta};
  border-radius: ${({ theme }) => theme.borders.rounded.lg};
  padding: ${({ theme }) => theme.spacing.sp10}
    ${({ theme }) => theme.spacing.sp6} ${({ theme }) => theme.spacing.sp8}
    ${({ theme }) => theme.spacing.sp6};
  img {
    height: 50px;
    grid-area: img;
    align-self: center;
    border-radius: ${({ theme }) => theme.borders.rounded.full};
  }
  .title {
    grid-area: title;
    margin-left: ${({ theme }) => theme.spacing.sp6};
  }
  h3,
  p {
    margin: 0;
    padding: 0;
  }
  h3 {
    color: ${({ theme }) => theme.colors.neutral.white};
  }
  p {
    color: ${({ theme }) => theme.colors.primary.pink};
  }
  blockquote {
    margin: 0;
    padding: 0;
    grid-area: text;
    margin-top: ${({ theme }) => theme.spacing.sp6};
    color: ${({ theme }) => theme.colors.neutral.magenta.lightGray};
  }
  blockquote:before {
    content: open-quote;
  }
  blockquote:after {
    content: close-quote;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    :nth-child(1) {
      margin-bottom: ${({ theme }) => theme.spacing.sp8};
    }
    :nth-child(2) {
      margin-top: ${({ theme }) => theme.spacing.sp4};
      margin-bottom: ${({ theme }) => theme.spacing.sp4};
    }
    :nth-child(3) {
      margin-top: ${({ theme }) => theme.spacing.sp8};
    }
    height: 80%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.huge}) {
  }
`;

export default StyledTestimonialCard;
