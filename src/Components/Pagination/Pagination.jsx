import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import style from './Pagination.module.scss';
// import { ReactComponent as ArrowNext } from '../../assets/arrow_right-active.svg';
// import { ReactComponent as ArrowPrev } from '../../assets/arrow_left-noActive.svg';
import cn from "classnames";
import { setPage } from "../../features/goodsSlice";

export const Pagination = () => {
    const pathname = useLocation().pathname;
    const { page, pages } = useSelector(state => state.goods);
    const dispatch = useDispatch();

    const handlePageChange = (newPage => {
        dispatch(setPage(newPage));
    });

    const handlePrevPage = () => {
        if (page > 1) {
            handlePageChange(page - 1);
        }
    }

    const handleNextPage = () => {
        if (page < pages) {
            handlePageChange(page + 1);
        }
    }

    const renderPaginationItems = () => {
        const paginationItems = [];

        let startPage = Math.max(1, page - 1);
        console.log('startPage :', startPage);
        let endPage = Math.min(startPage + 2, pages);
        console.log('endPage :', endPage);

        for (let i = startPage; i < endPage; i++) {
            paginationItems.push(
                <li key={i} className={style.item}>
                    <NavLink
                        to={`${pathname}?page=${i}`}
                        className={cn(style.link, i === +page ?? style.linkActive)}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </NavLink>
                </li>
            );
        }
        return paginationItems;
    }

    return (
        <div className={style.pagination}>
            <button
                className={style.arrow}
                onClick={handlePrevPage}
                disabled={page <= 2}
            >
                {/* <ArrowPrev /> */}
                &lt;
            </button>
            <ul className={style.list}>
                {renderPaginationItems()}
            </ul>
            <button
                className={style.arrow}
                onClick={handleNextPage}
                disabled={page >= pages - 1 || page <= 3}
            >
                {/* <ArrowNext /> */}
                &gt;
            </button>
        </div>
    )
}