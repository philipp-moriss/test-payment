import { makeAutoObservable } from 'mobx'


export type Membership = {
  id: number,
  price: {
    dollars: number,
    nis: number,
  }
}

export type OtherAmount = {
  price: number;
  currency: 'dollars' | 'nis';
}

export type OneTimeAmount = {
  price: number;
  currency: 'dollars' | 'nis';
}

class MembershipStore {
  isMonthly: boolean = true
  isOther: boolean = false

  memberships: Membership[] = [
    {
      id: 1,
      price: {
        dollars: 1,
        nis: 4,
      }
    },
    {
      id: 2,
      price: {
        dollars: 5,
        nis: 20,
      }
    },
    {
      id: 3,
      price: {
        dollars: 25,
        nis: 100,
      }
    },
    {
      id: 4,
      price: {
        dollars: 100,
        nis: 400,
      }
    }
  ]
  otherAmount: OtherAmount | null = null
  oneTimeAmount: OneTimeAmount | null = null

  selectedMembership: Membership | null = null

  constructor() {
    makeAutoObservable(this)
  }

  setIsMonthly = (isMonthly: boolean) => {
    this.isOther = false
    this.oneTimeAmount = null
    this.otherAmount = null
    this.selectedMembership = null
    this.isMonthly = isMonthly
  }

  setIsOther = (isOther: boolean) => {
    this.oneTimeAmount = null
    this.otherAmount = null
    this.selectedMembership = null
    this.isOther = isOther
  }

  setSelectedMembership = (membershipId: Membership['id']) => {
    const membership = this.memberships.find(membership => membership.id === membershipId)
    if (!membership) {
      return
    }
    this.isOther = false
    if (this.selectedMembership?.id === membershipId) {
      this.selectedMembership = null
    } else {
      this.selectedMembership = {...membership}
    }
  }

  setOtherAmount = (amount: number, currency: 'dollars' | 'nis') => {
    this.otherAmount = {
      price: amount,
      currency: currency
    }
  }

  setOneTimeAmount = (amount: number, currency: 'dollars' | 'nis') => {
    this.oneTimeAmount = {
      price: amount,
      currency: currency
    }
  }
}

export const membershipStore = new MembershipStore() 