import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: ReactNode;
}

const Button = ({ text, type = "button", children, ...props }: ButtonProps) => {
  return (
    <button type={type} {...props}>
      {text ?? children}
    </button>
  );
};

export default Button;
