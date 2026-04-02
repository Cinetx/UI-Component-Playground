"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { getCards } from "@/lib/api/cards";
import { setCards } from "@/lib/features/cards/cardsSlice";

export default function DataLoader() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const loadData = async () => {
            const cards = await getCards();
            dispatch(setCards(cards));
        };

        loadData();
    }, [dispatch]);

    return null;
}