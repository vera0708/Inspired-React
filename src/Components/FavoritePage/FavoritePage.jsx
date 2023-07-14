import { useDispatch, useSelector } from "react-redux"
import { Goods } from "../Goods/Goods"
import { useEffect } from "react";
import { fetchCategory } from "../../features/goodsSlice";
import { usePageFromSwarchParams } from "../../hooks/usePageFromSearchParam";

export const FavoritePage = () => {
    const dispatch = useDispatch();

    const favorites = useSelector(state => state.favorites);

    const page = usePageFromSwarchParams(dispatch);
    console.log('page: ', page);

    useEffect(() => {
        if (favorites) {
            const param = { list: favorites }
            if (page) {
                param.page = page;
            }
            dispatch(fetchCategory(param))
        }

    }, [favorites, dispatch]);

    return (
        <Goods title='Избранное' />
    )
}