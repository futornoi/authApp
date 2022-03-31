import { motion } from 'framer-motion';
import { getFirstLetters } from '../Helpers/nameInitials';

interface IAvatar {
  imgSrc: string;
  initialName: string;
  className?: string;
  sizes?: number;
}

const Avatar: React.FC<IAvatar> = ({ imgSrc, sizes, initialName, className }) => {
  const avatarSize = {
    width: sizes ?? 80,
    height: sizes ?? 80,
    borderRadius: '50%',
    border: imgSrc ? '' : '1px solid white'
  };

  return (
    <motion.div
      style={avatarSize}
      className={`avatar-img_container ${className ?? ''}`}
      whileHover={{ scale: 1.1, borderRadius: '30%' }}>
      {imgSrc ? (
        <img className="avatar-img" src={imgSrc} alt="me photo" />
      ) : (
        <div className="avatar-img letter">{getFirstLetters(initialName)}</div>
      )}
    </motion.div>
  );
};

export default Avatar;
