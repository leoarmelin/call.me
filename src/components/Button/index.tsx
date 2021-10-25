import { StyledButton } from "./styles";

interface IButtonProps {
  bgColor?: string;
  bgColorActive?: string;
  label: string;
}

export const Button = ({ bgColor, label, bgColorActive }: IButtonProps) => {
  return (
    <StyledButton $bgColor={bgColor} $bgColorActive={bgColorActive}>
      {label}
    </StyledButton>
  );
};
