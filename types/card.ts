import { CARD_TYPES } from "@/constants/card";

export type CardType = typeof CARD_TYPES[keyof typeof CARD_TYPES];

export type CardItem = {
    id: number;
    title: string;
    description: string;
    price: number;
    type: CardType;
    date: string;
};