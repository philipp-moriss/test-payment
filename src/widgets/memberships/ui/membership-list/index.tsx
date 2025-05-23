import type { MembershipPrice } from "@/stores/membership-store";
import { Membership } from "../membership";
import { OtherAmount } from "../other-amount";
import styles from "./styles.module.css";

interface MembershipListProps {
  listData: MembershipPrice[];
}

export const MembershipList: React.FC<MembershipListProps> = ({ listData }) => {
  return (
    <div className={styles.wrapper}>
      {listData.map((member, index) => {
        return <Membership key={index} member={member} />;
      })}
      <OtherAmount />
    </div>
  );
};
