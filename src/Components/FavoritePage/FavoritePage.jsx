import { useDispatch, useSelector } from "react-redux"
import { Goods } from "../Goods/Goods"
import { useEffect } from "react";
import { fetchCategory, setPage } from "../../features/goodsSlice";
import { useLocation } from "react-router-dom";

export const FavoritePage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const pageURL = searchParams.get('page');
    console.log('pageURL: ', pageURL);

    useEffect(() => {
        dispatch(setPage(pageURL))
    }, [pageURL, dispatch])

    const favorites = useSelector(state => state.favorites);

    useEffect(() => {
        dispatch(fetchCategory({ list: favorites }))
    }, [favorites, dispatch]);

    return (
        <Goods title='Избранное' />
    )
}