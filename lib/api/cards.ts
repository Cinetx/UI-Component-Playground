import { cardsMock } from "@/mocks/cards";
import type { CardItem } from "@/types/card";

export async function getCards(): Promise<CardItem[]> {
    // тут потом можно заменить на рельные данные
    // const response = await fetch("https://api.example.com/cards");
    // return response.json();

    await new Promise((resolve) => setTimeout(resolve, 500));

    return cardsMock;
}