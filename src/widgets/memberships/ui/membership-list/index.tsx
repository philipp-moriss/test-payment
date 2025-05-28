import type { Membership as MembershipType } from "@/stores/membership-store";
import { Membership } from "../membership";
import { OtherToggle } from "../other-toggle";
import styles from "./styles.module.css";
import { observer } from "mobx-react-lite";
import { motion } from "motion/react";

interface MembershipListProps {
  listData: MembershipType[];
}

export const MembershipList: React.FC<MembershipListProps> = observer(({ listData }) => {
  return (
    <div className={styles.wrapper}>
      {listData.map((member, index) => {
        return <motion.div
        initial={{ rotate: '-70deg', scale: -0.5, opacity: 0 }}
        whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1 }}
      >
        <Membership key={index} member={member} />
      </motion.div>;
      })}
      <motion.div
        initial={{ rotate: '-70deg', scale: -0.5, opacity: 0 }}
        whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: listData.length * 0.1 }}
      >
        <OtherToggle />
      </motion.div>
    </div>
  );
});
