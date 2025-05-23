import { makeAutoObservable } from 'mobx'


export type MembershipPrice = {
  price: {
    dollars: number,
    nis: number,
  }
}

export type OtherPrice = {
  price: number;
  currency: 'dollars' | 'nis';
}

class MembershipStore {
  isMonthly: boolean = false
  isOther: boolean = false

  monthlyPrice: MembershipPrice[] = [
    {
      price: {
        dollars: 1,
        nis: 4,
      }
    },
    {
      price: {
        dollars: 5,
        nis: 20,
      }
    },
    {
      price: {
        dollars: 25,
        nis: 100,
      }
    },
    {
      price: {
        dollars: 100,
        nis: 400,
      }
    }
  ]
  otherPrice: OtherPrice = {
    price: 100,
    currency: 'dollars'
  }

  selectedPrice: MembershipPrice | OtherPrice = this.monthlyPrice[0]

  constructor() {
    makeAutoObservable(this)
  }

  setIsMonthly = (isMonthly: boolean) => {
    this.isMonthly = isMonthly
  }

  setIsOther = (isOther: boolean) => {
    this.isOther = isOther
  }

  setSelectedPrice = (price: MembershipPrice | OtherPrice) => {
    this.selectedPrice = price
  }
}

export const membershipStore = new MembershipStore() 