import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import '../Styles/Pages/NotFound.scss';
import { useRef } from 'react';

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      type: 'spring'
    }
  }
};

const item = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 }
};

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const dragRef = useRef<any>(null);
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.section
        variants={variants}
        className="not-found"
        initial="hidden"
        animate="visible"
        exit="exit"
        ref={dragRef}>
        <motion.h1 variants={item} drag dragConstraints={dragRef}>
          Not Found
        </motion.h1>
        <motion.span
          variants={item}
          whileHover={{ scale: 1.5 }}
          className="default-link"
          onClick={goBack}>
          go back
        </motion.span>
      </motion.section>
    </AnimatePresence>
  );
};

export default NotFound;
