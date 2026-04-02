import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CardItem } from "@/types/card";

type CardsState = {
    items: CardItem[];
};

const initialState: CardsState = {
    items: [],
};

const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        setCards(state, action: PayloadAction<CardItem[]>) {
            state.items = action.payload;
        },
    },
});

export const { setCards } = cardsSlice.actions;
export default cardsSlice.reducer;