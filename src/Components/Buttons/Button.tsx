import "src/Styles/Components/Button.scss";

interface IDefaultButton {
  type?: "button" | "submit" | "reset",
  className?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IDefaultButton> = (
  {
    children,
    type,
    className,
    onClick
  }) => {
  return (
    <button
      className={`${className ?? className} default-button`}
      type={type ?? 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button