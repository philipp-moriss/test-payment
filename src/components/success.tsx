import { paymentStore } from '../stores/payment-store'
import styles from './success.module.css'

export function Success() {
  return (
    <div className={styles.container} role="status" aria-live="polite">
      <span className={styles.icon}>✅</span>
      <h2 className={styles.title}>Платёж успешно выполнен!</h2>
      <p className={styles.subtitle}>Спасибо за использование нашего сервиса.</p>
      <button className={styles.button} type="button" onClick={paymentStore.reset}>
        Новый платёж
      </button>
    </div>
  )
} 