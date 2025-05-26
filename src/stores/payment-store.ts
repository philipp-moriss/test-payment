import { makeAutoObservable } from 'mobx'

export interface PaymentFormData {
  firstName: string
  lastName: string
  email: string
  country: string
}

class PaymentStore {
  step: 'form' | 'loading' | 'success' = 'form'
  formData: PaymentFormData | null = null

  constructor() {
    makeAutoObservable(this)
  }

  submitForm = (data: PaymentFormData) => {
    this.formData = data
    this.step = 'loading'
    setTimeout(() => {
      this.step = 'success'
    }, 2000)
  }

  reset = () => {
    this.step = 'form'
    this.formData = null
  }
}

export const paymentStore = new PaymentStore() 