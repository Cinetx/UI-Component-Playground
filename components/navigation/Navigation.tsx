import Link from "next/link";
import styles from "./Navigation.module.scss";

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link className={styles.link} href="/">Главная</Link>
                </li>

                <li className={styles.item}>
                    <Link className={styles.link} href="/cards">Карточки</Link>
                </li>
            </ul>
        </nav>
    );
}
