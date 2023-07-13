import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const';
import style from './Product.module.scss';
import { ColorList } from '../ColorList/ColorList';
import { BtnLike } from '../BtnLike/BtnLike';

export const Product = ({ id, pic, title, price, colors, description }) => {
    return (
        <article className={style.product}>
            <NavLink to={`/product/${id}`} className={style.link} >
                <img className={style.image} src={`${API_URL}${pic}`} alt={`${title}${description}`}></img>
                <h3 className={style.title}>{title}</h3>
            </NavLink>

            <div className={style.row}>
                <p className={style.price}>руб {price}</p>
                <BtnLike id={id} />
            </div>
            <ColorList colors={colors} />
        </article>
    )
}