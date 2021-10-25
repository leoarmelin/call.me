import { StyledButton } from "./styles";

interface IButtonProps {
  bgColor?: string;
  bgColorActive?: string;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  bgColor,
  label,
  bgColorActive,
  onClick,
}: IButtonProps) => {
  return (
    <StyledButton
      $bgColor={bgColor}
      $bgColorActive={bgColorActive}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};
