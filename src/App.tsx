import { observer } from 'mobx-react-lite'
import { FormPayment } from './components/form-payment'
import { Loader } from './components/loader'
import { Success } from './components/success'
import { paymentStore } from './stores/payment-store'
import styles from './App.module.css'
import { useCallback } from 'react'

const App = observer(function App() {
  // Смена темы body
  const handleThemeChange = useCallback((theme: string) => {
    document.body.setAttribute('data-theme', theme)
  }, [])

  return (
    <div className={styles.center}>
      {paymentStore.step === 'loading' && <Loader />}
      {paymentStore.step === 'success' && <Success />}
      {paymentStore.step === 'form' && <FormPayment onThemeChange={handleThemeChange} />}
    </div>
  )
})

export default App
