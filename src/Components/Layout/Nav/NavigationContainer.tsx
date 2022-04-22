import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useDimensions } from '../../../Hooks/useDemensions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import { IHeader } from '../Header';
import { toggleColorTheme } from "../../../Helpers/changeThemeColor";
import ThemeSwitchButton from "../../Inputs/ThemeSwitchButton";

const NavigationContainer: React.FC<IHeader> = ({ openedNav, toggleNav }) => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: { stiffness: 20, restDelta: 2 }
    }),
    closed: {
      clipPath: 'circle(20px at 35px 35px)',
      transition: { stiffness: 400, damping: 40 }
    }
  };

  return (
    <motion.nav
      className="navigation__container"
      initial={false}
      animate={openedNav ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}>
      <motion.div className="navigation-background" variants={sidebar}>
        <div className="navigation-items">
          <ThemeSwitchButton
            className="switch-theme"
            onClick={toggleColorTheme}
            checked={false}/>
        </div>
      </motion.div>
      <Navigation/>
      <MenuToggle toggle={toggleNav}/>
    </motion.nav>
  );
};

export default NavigationContainer;
