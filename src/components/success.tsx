import { paymentStore } from '../stores/payment-store'
import styles from './success.module.css'
import { Button } from './ui/button'

export function Success() {
  return (
    <div className={styles.container} role="status" aria-live="polite">
      <h2 className={styles.title}>Payment successful!</h2>
      <p className={styles.subtitle}>Thank you for using our service.</p>
      <Button type="button" variant={"orange"} onClick={paymentStore.reset}>
        New payment
      </Button>
    </div>
  )
} 