import { CARD_SORT_ORDER_TYPE, CARD_SORT_TYPE } from "@/constants/card";

export type SortBy = typeof CARD_SORT_TYPE[keyof typeof CARD_SORT_TYPE];
export type SortOrder = typeof CARD_SORT_ORDER_TYPE[keyof typeof CARD_SORT_ORDER_TYPE];