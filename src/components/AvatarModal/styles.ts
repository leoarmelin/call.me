import styled from "styled-components";

export const Container = styled.aside`
  position: absolute;

  left: 50%;
  top: 50%;

  display: flex;
  flex-direction: column;

  align-items: center;

  max-width: 770px;
  height: fit-content;
  width: 90vw;

  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0 0.875rem;

  background-color: ${({ theme }) => theme.colors.primary};

  transform: translate(-50%, -50%);

  & > button {
    margin: 1rem 0;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h3};
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.background};
`;
