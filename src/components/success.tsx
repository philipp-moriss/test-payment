import { motion } from 'motion/react'
import { paymentStore } from '../stores/payment-store'
import styles from './success.module.css'
import { Button } from './ui/button'

export function Success() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
    <div className={styles.container} role="status" aria-live="polite">
      <h2 className={styles.title}>Payment successful!</h2>
      <p className={styles.subtitle}>Thank you for using our service.</p>
      <Button type="button" variant={"orange"} onClick={paymentStore.reset}>
        New payment
      </Button>
    </div>
    </motion.div>
  )
} 