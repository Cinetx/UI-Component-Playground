import type { SelectProps } from "@/types/select"
import styles from './select.module.scss'
import { useEffect, useRef, useState } from "react"
import SelectItem from "./SelectItem";
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
                    {defaultValue && defaultLabel && (
                        <SelectItem value={defaultValue} label={defaultLabel} currentValue={currentValue} onSelect={onSelectClick} />
                    )}
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value} label={option.label} currentValue={currentValue} onSelect={onSelectClick} />
                    ))}
                </ul>
            </div>

        </div>
    )
}