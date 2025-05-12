import { observer } from 'mobx-react-lite'
import { useForm, Controller } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import { paymentStore } from '../stores/payment-store'
import styles from './form-payment.module.css'
import { useState, useEffect } from 'react'

interface FormValues {
  amount: string
  cardNumber: string
  expiryDate: string
  cvc: string
}

const DESIGN_VARIANTS = [
  { value: 'cartoon', label: 'Cartoon' },
  { value: 'modern', label: 'Modern' },
  { value: 'serious', label: 'Serious' },
] as const

type DesignVariant = typeof DESIGN_VARIANTS[number]['value']

interface FormPaymentProps {
  onThemeChange?: (theme: DesignVariant) => void
}

export const FormPayment = observer(function FormPayment({ onThemeChange }: FormPaymentProps) {
  const [design, setDesign] = useState<DesignVariant>('cartoon')
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: { amount: '', cardNumber: '', expiryDate: '', cvc: '' },
  })

  useEffect(() => {
    onThemeChange?.(design)
  }, [design, onThemeChange])

  function onSubmit(data: FormValues) {
    paymentStore.submitForm(data)
  }

  // Маппинг классов по версии дизайна
  const formClass =
    design === 'cartoon' ? styles.formCartoon :
    design === 'modern' ? styles.formModern :
    styles.formSerious
  const labelClass =
    design === 'cartoon' ? styles.labelCartoon :
    design === 'modern' ? styles.labelModern :
    styles.labelSerious
  const inputClass =
    design === 'cartoon' ? styles.inputCartoon :
    design === 'modern' ? styles.inputModern :
    styles.inputSerious
  const errorClass =
    design === 'cartoon' ? styles.errorCartoon :
    design === 'modern' ? styles.errorModern :
    styles.errorSerious
  const buttonClass =
    design === 'cartoon' ? styles.buttonCartoon :
    design === 'modern' ? styles.buttonModern :
    styles.buttonSerious

  return (
    <form className={formClass} onSubmit={handleSubmit(onSubmit)} aria-label="Payment form">
      <div style={{ marginBottom: 8 }}>
        <label htmlFor="design-select" style={{ fontWeight: 500, marginRight: 8 }}>Design variant:</label>
        <select
          id="design-select"
          value={design}
          onChange={e => setDesign(e.target.value as DesignVariant)}
          style={{ padding: 4, borderRadius: 6, border: '1px solid #e0e0e0' }}
          aria-label="Choose design variant"
        >
          {DESIGN_VARIANTS.map(v => (
            <option key={v.value} value={v.value}>{v.label}</option>
          ))}
        </select>
      </div>

      <label className={labelClass}>Amount</label>
      <Controller
        name="amount"
        control={control}
        rules={{ required: 'Enter amount' }}
        render={({ field }) => (
          <input {...field} type="number" min="1" placeholder="0" className={inputClass} aria-invalid={!!errors.amount} />
        )}
      />
      {errors.amount && <span className={errorClass}>{errors.amount.message}</span>}

      <label className={labelClass}>Card number</label>
      <Controller
        name="cardNumber"
        control={control}
        rules={{
          required: 'Enter card number',
          pattern: { value: /^\d{4} \d{4} \d{4} \d{4}$/, message: 'Format: 0000 0000 0000 0000' }
        }}
        render={({ field }) => (
          <IMaskInput
            {...field}
            mask="0000 0000 0000 0000"
            unmask={false}
            placeholder="0000 0000 0000 0000"
            className={inputClass}
            aria-invalid={!!errors.cardNumber}
            inputMode="numeric"
            onAccept={field.onChange}
          />
        )}
      />
      {errors.cardNumber && <span className={errorClass}>{errors.cardNumber.message}</span>}

      <label className={labelClass}>Expiry date</label>
      <Controller
        name="expiryDate"
        control={control}
        rules={{
          required: 'Enter expiry date',
          pattern: { value: /^(0[1-9]|1[0-2])\/\d{2}$/, message: 'Format: MM/YY' }
        }}
        render={({ field }) => (
          <IMaskInput
            {...field}
            mask="00/00"
            unmask={false}
            placeholder="MM/YY"
            className={inputClass}
            aria-invalid={!!errors.expiryDate}
            inputMode="numeric"
            onAccept={field.onChange}
          />
        )}
      />
      {errors.expiryDate && <span className={errorClass}>{errors.expiryDate.message}</span>}

      <label className={labelClass}>CVC</label>
      <Controller
        name="cvc"
        control={control}
        rules={{
          required: 'Enter CVC',
          pattern: { value: /^\d{3,4}$/, message: '3-4 digits' }
        }}
        render={({ field }) => (
          <IMaskInput
            {...field}
            mask="0000"
            unmask={false}
            placeholder="CVC"
            className={inputClass}
            aria-invalid={!!errors.cvc}
            inputMode="numeric"
            onAccept={field.onChange}
            type="password"
            maxLength={4}
          />
        )}
      />
      {errors.cvc && <span className={errorClass}>{errors.cvc.message}</span>}

      <button className={buttonClass} type="submit" disabled={isSubmitting}>Pay</button>
    </form>
  )
}) 