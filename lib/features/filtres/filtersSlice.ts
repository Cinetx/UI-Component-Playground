import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FiltersState = {
    search: string;
    category: string;
    status: string;
};

const initialState: FiltersState = {
    search: "",
    category: "all",
    status: "all",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload;
        },
        setStatus(state, action: PayloadAction<string>) {
            state.status = action.payload;
        },
        resetFilters() {
            return initialState;
        },
    },
});

export const { setSearch, setCategory, setStatus, resetFilters } =
    filtersSlice.actions;

export default filtersSlice.reducer;