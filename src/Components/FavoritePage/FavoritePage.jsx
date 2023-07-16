import { useDispatch, useSelector } from "react-redux"
import { Goods } from "../Goods/Goods"
import { useEffect } from "react";
import { fetchCategory } from "../../features/goodsSlice";
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParam";
import style from './FavoritePage.module.scss';


export const FavoritePage = () => {
    const dispatch = useDispatch();

    const favorites = useSelector(state => state.favorites);

    const page = usePageFromSearchParams(dispatch);
    console.log('page:', page);

    useEffect(() => {
        if (favorites) {
            const param = { list: favorites }
            if (page) {
                param.page = page;
            }
            dispatch(fetchCategory(param))
        }

    }, [favorites, page, dispatch]);

    return (
        favorites.length ?
            <Goods title='Избранное' />
            :
            <h3 className={style.empty}>Вы не добавили товары в избранное</h3>
    )
}