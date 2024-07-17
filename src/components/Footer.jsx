import styles from "./footer.module.css";
export default function ({ completedtodos, totalcount }) {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.itemcontainer}>
        <h3>CompletedTask:{completedtodos}</h3>
        <h3>TotalTask:{totalcount}</h3>
      </div>
    </div>
  );
}
