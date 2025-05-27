import { Header } from "../header"
import { MainDescription } from "../main-description"
import styles from './main.module.css'
import Background from '../../assets/background.png'

export const Main = () => {
  return (
    <div className={styles.background} style={{backgroundImage: `url(${Background})`}}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.container}>
        <Header/>
        <MainDescription/>
      </div>
    </div>
  )
}