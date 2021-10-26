import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  padding: 0 1.5rem;

  text-align: center;

  & > h1 {
    margin-bottom: 4rem;
  }

  & > input {
    margin: 2rem 0;
  }

  @media (max-width: 30em) {
    & > input {
      width: 80%;

      margin: 2rem auto;
    }
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: 400;
`;
