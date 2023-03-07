import styles from './Code.module.css';

function Code({ children }) {
    return (
      <pre className={styles.pre}>
        <code className={styles.code}>{children}</code>
      </pre>
    );
  }
  