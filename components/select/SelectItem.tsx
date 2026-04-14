import styles from './select.module.scss';
import type { SelectItemProps } from '@/types/select';
export default function SelectItem({ value, currentValue, label, onSelect }: SelectItemProps) {

    const isSelected = currentValue === value;
    return (
        <li className={styles.item}>
            <button onClick={() => onSelect(value)}
                className={(isSelected) ?
                    (`${styles.button} ${styles.buttonDisable}`) :
                    (styles.button)}
                value={value}
                disabled={(isSelected) ? (true) : (false)}
            >
                {label}
            </button>
        </li>
    )
}