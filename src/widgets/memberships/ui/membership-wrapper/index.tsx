import React, { type PropsWithChildren } from 'react'
import styles from './styles.module.css'

export const MembershipWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
        {children}
    </div>
  )
}
