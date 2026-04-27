interface InputProps {
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: React.HTMLInputTypeAttribute;
}

export default function Input({
  placeholder,
  value,
  onChange,
  className,
  type = "text",
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
}
