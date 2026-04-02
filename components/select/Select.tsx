import type { SelectProps } from "@/types/select"
import styles from './select.module.scss'
import { useEffect, useRef, useState } from "react"
export default function Select({ currentValue, title, defaultValue, defaultLabel, options, handleChange }: SelectProps) {
    const selectedOption = options.find((option) => option.value === currentValue)
    const [menuOpen, setMenuOpen] = useState(false);

    const selectContainer = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const eventTarget = event.target as Node | null
            if (selectContainer.current && !selectContainer.current.contains(eventTarget)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    function onSelectClick(value: string) {
        handleChange(value)
        setMenuOpen(false)
    }

    return (
        <div ref={selectContainer} className={(menuOpen) ? (`${styles.select} ${styles.selectOpen}`) : (styles.select)}>
            <p className={styles.title}>{title}</p>
            <div className={styles.wrapper}>
                <button onClick={() => setMenuOpen(menuOpen => !menuOpen)} className={styles.selected}>
                    {selectedOption ? selectedOption.label : defaultLabel}
                    <svg
                        className={styles.icon}
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button
                            onClick={() => onSelectClick(defaultValue)}
                            className={(currentValue === defaultValue) ?
                                (`${styles.button} ${styles.buttonDisable}`) :
                                (styles.button)}
                            value={defaultValue}
                            disabled={(currentValue === defaultValue) ? (true) : (false)}>
                            {defaultLabel}
                        </button>
                    </li>

                    {options.map((option) => (
                        <li className={styles.item} key={option.value}>
                            <button onClick={() => onSelectClick(option.value)}
                                className={(currentValue === option.value) ?
                                    (`${styles.button} ${styles.buttonDisable}`) :
                                    (styles.button)}
                                value={option.value}
                                disabled={(currentValue === option.value) ? (true) : (false)}
                            >
                                {option.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}