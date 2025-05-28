import styles from './header.module.css'
import Logo from '../../assets/logo.png'
import { motion } from 'motion/react'


export const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.header}>
        <img src={Logo} alt="logo" />
      </div>
    </motion.div>
  )
}
