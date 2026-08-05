interface ButtonProps {
  text?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({ text, className, onClick, disabled }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
