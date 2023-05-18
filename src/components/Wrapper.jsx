import styles from "./Wrapper.module.css";

export default function Wrapper({ children }) {
  return <main className={styles.Wrapper}>{children}</main>;
}
