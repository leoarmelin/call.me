import { StyledButton } from "./styles";

interface IButtonProps {
  bgColor?: string;
  bgColorActive?: string;
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({
  bgColor,
  label,
  bgColorActive,
  onClick,
  type,
}: IButtonProps) => {
  return (
    <StyledButton
      $bgColor={bgColor}
      $bgColorActive={bgColorActive}
      onClick={onClick}
      type={type ?? "button"}
    >
      {label}
    </StyledButton>
  );
};
