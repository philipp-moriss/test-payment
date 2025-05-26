import React, { type PropsWithChildren } from 'react'
import styles from './styles.module.css'

interface MembershipWrapperProps extends PropsWithChildren {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  isActive?: boolean;
  isSelected?: boolean;
}

export const MembershipWrapper: React.FC<MembershipWrapperProps> = ({ children, onClick, isActive, isSelected }) => {
  return (
    <div className={`${styles.wrapper} ${isActive ? styles.wrapperActive : ''} ${isSelected ? styles.wrapperSelected : ''}`} onClick={onClick}>
        {children}
    </div>
  )
}
