import styled from 'styled-components';

const StyledTestimonialCard = styled.li`
  height: 18rem;
  &:nth-child(2) {
    margin-top: 10px;
    margin-left: 25px;
  }
  &:nth-child(3) {
    margin-top: 20px;
    margin-left: 25px;
  }
  list-style: none;
  padding: 3.5rem 2rem 3.5rem 2rem;
  background: ${({ theme }) => theme.colors.primary.magenta};
  border-radius: ${({ theme }) => theme.borders.rounded.md};
  .tc-header-cont {
    display: flex;
    img {
      height: 50px;
      border-radius: ${({ theme }) => theme.borders.rounded.full};
    }
  }
  .tc-text-cont {
    margin-left: 25px;
    margin-right: 25px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h3 {
      margin: 0;
    }
    p {
      margin: 2px 0 0 0;
    }
  }
  .name {
    color: ${({ theme }) => theme.colors.neutral.white};
  }
  .subtitle {
    color: ${({ theme }) => theme.colors.primary.pink};
  }
  .review-text-cont {
    margin-top: 20px;
  }
  blockquote {
    margin: 0;
    padding: 0;
    line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
    color: ${({ theme }) => theme.colors.neutral.magenta.lightGray};
  }
  blockquote:before {
    content: open-quote;
  }
  blockquote:after {
    content: close-quote;
  }
`;

export default StyledTestimonialCard;
