import { CARD_TYPE_LABELS } from "@/constants/card"
import type { CardItem } from "@/types/card"
import styles from "./Card.module.scss"
import { dateFormatter } from "@/lib/utils/date"

export default function Card({ title, description, price, type, date }: CardItem) {


    return (
        <div className={styles.card}>
            <div className={styles.head}>
                <p className={styles.type}>
                    {CARD_TYPE_LABELS[type]}
                </p>
                <p className={styles.date}>{dateFormatter(date)}</p>
            </div>

            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>

            <div className={styles.price}>${price}</div>
        </div>
    )
}