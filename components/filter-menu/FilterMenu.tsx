"use client"
import { CARD_TYPES, CARD_TYPE_LABELS } from "@/constants/card";
import { setCategory, setSearch } from "@/lib/features/filtres/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import type { ChangeEvent } from "react";
import styles from "./FilterMenu.module.scss";
import Select from "../select/Select";
import { setCurrentPage } from "@/lib/features/cards-view/cardsViewSlice";

export default function FilterMenu() {
    const dispatch = useAppDispatch();
    const filters = useAppSelector((state) => state.filters);

    function handleSearchChange(evt: ChangeEvent<HTMLInputElement>) {
        dispatch(setSearch(evt.target.value));
        dispatch(setCurrentPage(1))
    };


    function handleCatagoryChange(value: string) {
        dispatch(setCategory(value))
        dispatch(setCurrentPage(1))
    }

    const categorySelectConfig = {
        title: 'Категория',
        defaultValue: 'all',
        defaultLabel: 'Все',
        options: Object.values(CARD_TYPES).map((type) => ({
            value: type,
            label: CARD_TYPE_LABELS[type],
        }))
    };



    return (
        <div className={styles.filtersMenu}>
            <Select currentValue={filters.category} handleChange={handleCatagoryChange} {...categorySelectConfig} />

            <div className={styles.search}>
                <label className={styles.label} htmlFor="search">Поиск</label>
                <input placeholder="Поиск по названию" value={filters.search} onChange={handleSearchChange} id="search" className={styles.searchInput} type="search" />
            </div>
        </div>
    );
}
