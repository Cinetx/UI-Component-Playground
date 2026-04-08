"use client"
import { CARD_SORT_LABELS, CARD_SORT_ORDER_LABELS, CARD_SORT_ORDER_TYPE, CARD_SORT_TYPE, CARD_TYPES, CARD_TYPE_LABELS } from "@/constants/card";
import { setCategory, setSearch } from "@/lib/features/filtres/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import type { ChangeEvent } from "react";
import styles from "./FilterMenu.module.scss";
import Select from "../select/Select";
import { setCurrentPage, setSortBy, setSortOrder } from "@/lib/features/cards-view/cardsViewSlice";
import type { SortBy } from "@/types/card-view";
export default function FilterMenu() {
    const dispatch = useAppDispatch();
    const filters = useAppSelector((state) => state.filters);
    const sorts = useAppSelector((state) => state.cardsView)

    function handleSearchChange(evt: ChangeEvent<HTMLInputElement>) {
        dispatch(setSearch(evt.target.value));
        dispatch(setCurrentPage(1))
    };



    function handleCategoryChange(value: string) {
        dispatch(setCategory(value))
        dispatch(setCurrentPage(1))
    }

    function handleSortChange(value: string) {
        dispatch(setSortBy(value as SortBy))
        dispatch(setCurrentPage(1))
    }

    function handleSortOrderChange() {
        const nextSortOrder = sorts.sortOrder === CARD_SORT_ORDER_TYPE.ASC ? CARD_SORT_ORDER_TYPE.DESC : CARD_SORT_ORDER_TYPE.ASC;
        dispatch(setSortOrder(nextSortOrder))
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

    const sortSelectConfig = {
        title: 'Сортировка',
        options: Object.values(CARD_SORT_TYPE).map((type) => ({
            value: type,
            label: CARD_SORT_LABELS[type],
        }))
    }


    console.log(sorts.sortOrder)


    return (
        <div className={styles.filtersMenu}>
            <Select currentValue={filters.category} handleChange={handleCategoryChange} {...categorySelectConfig} />
            <Select currentValue={sorts.sortBy} handleChange={handleSortChange} {...sortSelectConfig} />
            <button className={sorts.sortOrder === CARD_SORT_ORDER_TYPE.ASC ? (styles.sortOrder) : (`${styles.sortOrder} ${styles.sortOrderActive}`)} onClick={handleSortOrderChange}>

                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 15V5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                    <path
                        d="M6 9L10 5L14 9"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                {CARD_SORT_ORDER_LABELS[sorts.sortOrder]}
            </button>
            <div className={styles.search}>
                <label className={styles.label} htmlFor="search">Поиск</label>
                <input placeholder="Поиск по названию" value={filters.search} onChange={handleSearchChange} id="search" className={styles.searchInput} type="search" />
            </div>
        </div>
    );
}
