import styles from "./about-us.module.css";
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.panel}>
        <section className={styles.titleSection}>
          <div className={styles.titleContent}>
            <p className={styles.smallTitle}>About Us</p>
            <h1 className={styles.mainTitle}>About Us</h1>
            <div className={styles.underline} />
          </div>
        </section>
        <section className={styles.contentSection}>
            <div><h2 className={styles.sectionTitle}>Our WHY</h2>
              <p className={styles.bodyText}>{text}</p>
            </div>
          </section>
      </div>
    </main>
  );
}
