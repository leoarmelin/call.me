import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  height: fit-content;
  width: fit-content;
`;

export const IconImage = styled.img`
  height: 14.375rem;
  width: 14.375rem;
`;

export const PencilWrapper = styled.button`
  position: absolute;
  display: flex;

  bottom: 0;
  right: 0;

  align-items: center;
  justify-content: center;

  height: 4rem;
  width: 4rem;

  outline: 8px solid ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.primary};

  box-sizing: border-box;

  &:active {
    background-color: ${({ theme }) => theme.colors.primaryPlus};
  }
`;

export const IconPencil = styled.img`
  height: 2.5rem;
  width: 2.5rem;
`;
