import { FormPaymentWidget } from '../form'
import { MembershipWidget } from '../memberships'
import styles from './payment.module.css'

export const Payment = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Select Your Contribution</h1>
        <h2 className={styles.subtitle}>All donations are tax-deductible in Israel and the US</h2>
      </div>
      <MembershipWidget/>
      <FormPaymentWidget/>
    </div>
  )
}
