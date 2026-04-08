export const CARD_TYPES = {
    VEGETABLES: "vegetables",
    FRUITS: "fruits",
    BERRIES: "berries",
} as const;

export const CARD_TYPE_LABELS = {
    vegetables: "Овощи",
    fruits: "Фрукты",
    berries: "Ягоды",
} as const;

export const CARD_SORT_TYPE = {
    DATE: 'date',
    PRICE: 'price',
} as const;

export const CARD_SORT_LABELS = {
    date: 'По дате',
    price: 'По цене',
} as const;

export const CARD_SORT_ORDER_TYPE = {
    ASC: 'asc',
    DESC: 'desc'
} as const;

export const CARD_SORT_ORDER_LABELS = {
    asc: 'По возрастанию',
    desc: 'По убыванию'
} as const;