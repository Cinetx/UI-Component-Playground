"use client";

import Card from "./Card";
import { useAppSelector } from "@/lib/hooks";
import { selectPaginatedCards } from "@/lib/selectors/cards";
import styles from "./CardList.module.scss";

export default function CardList() {
    const cards = useAppSelector(selectPaginatedCards)
    return (
        <div className={styles.cardList}>
            {cards.length === 0 ? (<p className={styles.empty}>Ничего не найдено</p>) : (
                cards.map((card) => (
                    <Card key={card.id} {...card} />
                ))
            )}
        </div>
    );
}
