import type { Membership as MembershipType } from "@/stores/membership-store";
import { Membership } from "../membership";
import { OtherToggle } from "../other-toggle";
import styles from "./styles.module.css";
import { observer } from "mobx-react-lite";

interface MembershipListProps {
  listData: MembershipType[];
}

export const MembershipList: React.FC<MembershipListProps> = observer(({ listData }) => {
  return (
    <div className={styles.wrapper}>
      {listData.map((member, index) => {
        return <Membership key={index} member={member} />;
      })}
      <OtherToggle />
    </div>
  );
});
