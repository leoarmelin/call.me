import styled from "styled-components";

interface IAvatarIcon {
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
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 0.75rem;

  max-height: 450px;
  height: fit-content;
  width: 100%;

  padding-right: 0.5rem;

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

export const AvatarButton = styled.button`
  height: fit-content;
  width: fit-content;

  border: none;
  border-radius: 50%;

  background-color: transparent;
`;

export const AvatarIcon = styled.img<IAvatarIcon>`
  position: relative;

  height: 10rem;
  width: 10rem;

  &::after {
    content: "aoba";
    display: ${({ $isSelected }) => ($isSelected ? "block" : "none")};
    // position: absolute;

    left: 0;
    top: 0;

    height: 12rem;
    width: 12rem;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.primary};

    // transform: translate(50%, 50%);
  }
`;
