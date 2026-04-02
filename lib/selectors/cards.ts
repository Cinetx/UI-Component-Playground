import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store"

const selectCards = (state: RootState) => {
    return state.cards.items;

}

const selectFilters = (state: RootState) => {
    return state.filters;

}

const selectCurrentPage = (state: RootState) => {
    return state.cardsView.currentPage
}
const selectCardsPerPage = (state: RootState) => {
    return state.cardsView.itemsPerPage
}

export const selectFilteredCards = createSelector(
    [selectCards, selectFilters],
    (cards, filters) => {
        const filteredCards = cards.filter((card) => {
            const matchesCategory = filters.category === "all" || card.type === filters.category;
            const matchesSearch = card.title.toLowerCase().includes(filters.search.toLowerCase());
            return matchesCategory && matchesSearch;
        })

        return filteredCards;
    })

export const selectPaginatedCards = createSelector(
    [selectCurrentPage, selectCardsPerPage, selectFilteredCards],
    (currentPage, cardsPerPage, filtredCards) => {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        const sortedCards = filtredCards.slice(startIndex, endIndex);

        return sortedCards;
    })

export const selectPageCount = createSelector(
    [selectFilteredCards, selectCardsPerPage],
    (filteredCards, cardsPerPage) => {
        const cardsCount = filteredCards.length;
        const pageCount = Math.ceil(cardsCount / cardsPerPage)
        return pageCount;
    })