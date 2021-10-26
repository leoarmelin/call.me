import styled from "styled-components";

interface IAvatarButton {
  $isSelected: boolean;
}

export const Container = styled.div`
  height: fit-content;
  width: 100%;

  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.75rem 1.75rem 1rem 1rem;

  background-color: ${({ theme }) => theme.colors.backgroundMinus};
`;

export const ScrollList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  grid-gap: 0.75rem;

  max-height: 28.125rem;
  height: fit-content;
  width: 100%;

  padding-right: 0.75rem;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const AvatarButton = styled.button<IAvatarButton>`
  position: relative;
  display: flex;

  align-items: center;
  justify-content: center;

  height: 10.5rem;
  width: 10.5rem;

  border: none;
  border-radius: 50%;

  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.primary : "transparent"};

  /* &::after {
    content: "";
    display: ${({ $isSelected }) => ($isSelected ? "block" : "none")};
    position: absolute;

    left: 0;
    top: 0;

    height: 12rem;
    width: 12rem;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.primary};

    z-index: 0;
  } */
`;

export const AvatarIcon = styled.img`
  height: 10rem;
  width: 10rem;

  z-index: 1;
`;
