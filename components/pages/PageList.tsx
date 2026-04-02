'use client'

import { setCurrentPage } from "@/lib/features/cards-view/cardsViewSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectPageCount } from "@/lib/selectors/cards";

import style from './PageList.module.scss';
export default function PageList() {

    const dispatch = useAppDispatch();
    const pageCount = useAppSelector(selectPageCount)
    const currentPage = useAppSelector((state) => state.cardsView.currentPage)
    const pages = Array.from({ length: pageCount }, ((_, i) => i + 1))


    function handleButtonClick(page: number) {
        dispatch(setCurrentPage(page))
    }

    return (
        <ul className={style.list}>
            {pages.map((page) => {
                return <li key={page} className={(page === currentPage) ?
                    (`${style.item} ${style.itemActive}`) : (style.item)}>
                    <button disabled={(pageCount <= 1) ? (true) : (false)} onClick={() => handleButtonClick(page)} className={style.button}>{page}</button>
                </li>
            })}

        </ul>
    )
}