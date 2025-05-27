import styles from './header.module.css'
import Logo from '../../assets/logo.png'


export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="logo" />
    </div>
  )
}
