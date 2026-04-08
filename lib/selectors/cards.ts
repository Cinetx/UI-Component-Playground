import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store"
import { CARD_SORT_ORDER_TYPE, CARD_SORT_TYPE } from "@/constants/card";

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

const selectSortBy = (state: RootState) => {
    return state.cardsView.sortBy
}

const selectSortOrder = (state: RootState) => {
    return state.cardsView.sortOrder
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

export const selectSortedCards = createSelector(
    [selectFilteredCards, selectSortBy, selectSortOrder],
    (filteredCards, sortBy, sortOrder) => {

        let sortedCards = filteredCards
        if (sortOrder === CARD_SORT_ORDER_TYPE.ASC) {
            switch (sortBy) {
                case CARD_SORT_TYPE.DATE:
                    sortedCards = filteredCards.toSorted((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                    break;
                case CARD_SORT_TYPE.PRICE:
                    sortedCards = filteredCards.toSorted((a, b) => a.price - b.price)
                    break;
                default:
                    sortedCards = filteredCards
            }
        } else if (sortOrder === CARD_SORT_ORDER_TYPE.DESC) {
            switch (sortBy) {
                case CARD_SORT_TYPE.DATE:
                    sortedCards = filteredCards.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    break;
                case CARD_SORT_TYPE.PRICE:
                    sortedCards = filteredCards.toSorted((a, b) => b.price - a.price)
                    break;
                default:
                    sortedCards = filteredCards
            }
        }


        return sortedCards
    }
)
export const selectPaginatedCards = createSelector(
    [selectCurrentPage, selectCardsPerPage, selectSortedCards],
    (currentPage, cardsPerPage, sortedCards) => {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        const cards = sortedCards.slice(startIndex, endIndex);

        return cards;
    })

export const selectPageCount = createSelector(
    [selectFilteredCards, selectCardsPerPage],
    (filteredCards, cardsPerPage) => {
        const cardsCount = filteredCards.length;
        const pageCount = Math.ceil(cardsCount / cardsPerPage)
        return pageCount;
    })