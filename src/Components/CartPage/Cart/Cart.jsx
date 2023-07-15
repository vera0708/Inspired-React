import { Container } from '../../Layout/Container/Container';
import style from './Cart.module.scss';
import { CartItem } from './CartItem/CartItem';

export const Cart = ({ cartItems, goodsList }) => {
    const totalPrice = 0;

    return (
        <section className={style.cart}>
            <Container>
                <h2 className={style.title}>Корзина</h2>

                {goodsList.length ?
                    <ul className={style.list}>
                        {cartItems.map(item => (
                            <li
                                key={`${item.id}-${item.color}-${item.size}`}
                                className={style.item}
                            >
                                <CartItem {...item} goodsList={goodsList} />
                            </li>
                        ))}
                    </ul>
                    :
                    <h3 className={style.title}>Корзина пустая</h3>
                }
                <div className={style.total}>
                    <p>ИТОГО:</p>
                    <p>руб {totalPrice}</p>
                </div>
            </Container>
        </section>
    )
}