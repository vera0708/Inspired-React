// import { useSelector } from 'react-redux';
import style from './ProductSize.module.scss';

export const ProductSize = ({
    size,
    // selectedSize,
    handleSizeChange }
) => {
    // const { sizeList } = useSelector(state => state.size);

    console.log('size : ', size);

    return handleSizeChange ? (
        <div className={style.list}>
            DIv
        </div>
    ) : (
        <ul className={style.list}>
            UL
        </ul>
    )
}