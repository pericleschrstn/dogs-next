import styles from "@/app/login/login.module.css";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </section>
  );
}
