import styles from './loader.module.css'

export function Loader() {
  return (
    <div className={styles.container} role="status" aria-live="polite">
      <div className={styles.spinner} />
      <span className={styles.text}>Processing payment...</span>
    </div>
  )
} 