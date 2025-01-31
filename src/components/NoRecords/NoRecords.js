import styles from "./NoRecords.module.css";
import "./NoRecords.module.css";

const NoRecords = () => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>No records available at the moment.</p>
    </div>
  );
};

export default NoRecords;