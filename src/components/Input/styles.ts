import styled from "styled-components";

export const Input = styled.input`
  max-width: 35.625rem;
  height: 4rem;
  width: 100%;

  border: 4px solid #d9d9d9;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0 1.5rem;

  font-size: ${({ theme }) => theme.fontSize.h5};

  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};

  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.backgroundMinus};
  }
`;
