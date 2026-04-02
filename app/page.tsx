import styles from "./page.module.scss";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>UI Component Playground</h1>
        <p className={styles.description}>
          Экспериментальная площадка для компонентов.
        </p>
      </div>
    </section>
  );
}
