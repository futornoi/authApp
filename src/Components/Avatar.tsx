import { motion } from "framer-motion";

interface IAvatar {
  imgSrc: string,
  sizes?: number,
}

const Avatar:React.FC<IAvatar> = ({imgSrc, sizes}) => {
  const avatarSize = {
    width: sizes ?? 60,
    height: sizes ?? 60,
    borderRadius: 100,
}

  return (
    <motion.div
      style={avatarSize} className="avatar-img_container"
      whileHover={{scale: 1.1, borderRadius: 30}}>
      <img className="avatar-img" src={imgSrc} alt="me photo"/>
    </motion.div>
  )
}

export default Avatar;