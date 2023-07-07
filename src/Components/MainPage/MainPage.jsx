import { useParams } from "react-router-dom"
import { Container } from "../Layout/Container/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../../features/goodsSlice";
import style from './MainPage.module.scss';
import { Product } from "../Product/Product";

export const MainPage = ({ gender = 'women' }) => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const { goodsList } = useSelector(state => state.goods)

    useEffect(() => {
        dispatch(fetchGoods(gender))
    }, [gender, dispatch])

    return (
        <section className={style.goods}>
            <Container>
                <h2 className={style.title}>НОВИНКИ</h2>
                <ul className={style.list}>
                    {goodsList.map(item =>
                    (<li key={item.id}>
                        <Product  {...item} />
                    </li>
                    ))}
                </ul>
                {category && <p>Категория: {category}</p>}
            </Container>
        </section>

    )
};