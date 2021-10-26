import styled from "styled-components";

export const Container = styled.main`
  display: flex;

  align-items: center;

  height: 100vh;
  width: 100vw;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: fit-content;
  width: 100%;

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
  padding: 0 1.5rem;

  text-align: center;

  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: 400;
`;
