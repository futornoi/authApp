import { useState } from "react";
import "../../Styles/Components/ThemeSwitchButton.scss";

interface ThemeButton {
  className?: string;
  onClick: () => void;
  checked: boolean;
}
const ThemeSwitchButton:React.FC<ThemeButton> = ({checked, onClick, className}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleOnChecked = () => {
    setIsChecked(prev => !prev);
    onClick()
  }

  return (
    <div className={`switch-wrap ${className ?? ''}`}>
      <input
        id="themeSwitch"
        className="theme-switch__input"
        type="checkbox"
        name="theme-switch"
        readOnly
        checked={isChecked}
        onClick={handleOnChecked}
      />
      <label htmlFor="themeSwitch" className="theme-switch__label">
        <span/>
      </label>
    </div>
  );
};

export default ThemeSwitchButton;
