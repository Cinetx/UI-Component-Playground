import { CARD_SORT_ORDER_TYPE, CARD_SORT_TYPE } from "@/constants/card";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SortBy, SortOrder } from "@/types/card-view";
type CardsViewState = {
    currentPage: number,
    itemsPerPage: number,
    sortBy: SortBy,
    sortOrder: SortOrder,
}

const initialState: CardsViewState = {
    currentPage: 1,
    itemsPerPage: 6,
    sortBy: CARD_SORT_TYPE.DATE,
    sortOrder: CARD_SORT_ORDER_TYPE.ASC,
}

const cardsViewSlice = createSlice({
    name: 'cardsView',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setSortBy(state, action: PayloadAction<SortBy>) {
            state.sortBy = action.payload
        },
        setSortOrder(state, action: PayloadAction<SortOrder>) {
            state.sortOrder = action.payload
        },
    }
})

export const { setCurrentPage, setSortBy, setSortOrder } = cardsViewSlice.actions;
export default cardsViewSlice.reducer;