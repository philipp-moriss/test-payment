import { motion } from "motion/react";
import styles from "./loader.module.css";

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container} role="status" aria-live="polite">
        <div className={styles.spinner} />
        <span className={styles.text}>Processing payment...</span>
      </div>
    </motion.div>
  );
}
