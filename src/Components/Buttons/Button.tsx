import 'src/Styles/Components/Button.scss';

interface IDefaultButton {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: React.FC<IDefaultButton> = ({ children, type, className, onClick, disabled }) => {
  return (
    <button
      className={`${className ?? ''} default-button`}
      type={type ?? 'button'}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
