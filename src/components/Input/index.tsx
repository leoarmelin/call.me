import { Input as StyledInput } from "./styles";

interface IInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = ({ onChange, placeholder, value }: IInputProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};
