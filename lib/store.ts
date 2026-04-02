import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './features/filtres/filtersSlice'
import cardsReducer from "./features/cards/cardsSlice";
import cardsViewReducer from "./features/cards-view/cardsViewSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            filters: filtersReducer,
            cards: cardsReducer,
            cardsView: cardsViewReducer,
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']