import styled from "styled-components";

interface IStyledButton {
  $bgColor?: string;
  $bgColorActive?: string;
}

export const StyledButton = styled.button<IStyledButton>`
  height: 4rem;
  width: fit-content;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0 1.5rem;

  font-size: ${({ theme }) => theme.fontSize.h5};
  font-weight: bold;
  text-transform: uppercase;

  background-color: ${({ $bgColor, theme }) =>
    $bgColor ?? theme.colors.primary};
  color: ${({ theme }) => theme.colors.textMinus};

  &:active {
    background-color: ${({ $bgColorActive, theme }) =>
      $bgColorActive ?? theme.colors.primaryPlus};
  }
`;
