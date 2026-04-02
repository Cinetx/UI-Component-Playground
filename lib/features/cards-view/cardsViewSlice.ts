import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CardsViewState = {
    currentPage: number,
    itemsPerPage: number,
}

const initialState: CardsViewState = {
    currentPage: 1,
    itemsPerPage: 6,

}

const cardsViewSlice = createSlice({
    name: 'cardsView',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
    }
})

export const { setCurrentPage } = cardsViewSlice.actions;
export default cardsViewSlice.reducer;