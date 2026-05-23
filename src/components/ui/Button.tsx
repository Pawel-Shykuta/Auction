interface ButtonProps {
  text?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
