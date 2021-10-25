import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  height: fit-content;
  width: 100%;

  & > h1 {
    margin-bottom: 4rem;
  }

  & > input {
    margin: 2rem 0;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: 400;
`;
