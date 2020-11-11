import styled from 'styled-components';

const StyledTestimonialList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 90%;
  margin-top: ${({ theme }) => theme.spacing.sp6};
  margin-left: 5%;
  margin-bottom: ${({ theme }) => theme.spacing.sp10};
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: ${({ theme }) => theme.spacing.sp10};
    grid-area: testimonial;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0;
    gap: 2rem;
  }
  @media (min-width: 1200px) {
    margin-top: ${({ theme }) => theme.spacing.sp4};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.huge}) {
  }
`;

export default StyledTestimonialList;
