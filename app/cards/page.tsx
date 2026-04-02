import CardList from "@/components/cards/CardList";
import FilterMenu from "@/components/filter-menu/FilterMenu";
import styles from "./page.module.scss";
import PageList from "@/components/pages/PageList";

export default function cardsPage() {
    return (
        <section className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Карточки</h1>
                <p className={styles.description}>Фильтруй карточки по категории и названию.</p>
            </div>
            <FilterMenu />
            <div className={styles.list}>
                <CardList />
            </div>
            <PageList />
        </section>
    );
}
