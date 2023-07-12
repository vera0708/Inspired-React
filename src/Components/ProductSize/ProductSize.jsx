// import { useSelector } from 'react-redux';
// import { useEffect, useRef } from 'react';
import style from './ProductSize.module.scss';
import cn from 'classnames';

export const ProductSize = ({
    size,
    selectedSize,
    handleSizeChange
}) => {
    return (
        <div className={style.size}>
            {/* {size?.map((i) => { 
                console.log('size[i] : ', size[i]);*/}
            <ul className={style.list}>
                <label >
                    <input
                        className={style.input}
                        type='checkbox'
                        name='size'
                        checked={selectedSize === size?.title}
                        onChange={handleSizeChange}
                    />
                    <span className={cn(style.item, style.check)}>XS</span>
                </label>
            </ul>
            {/* })}*/}
        </div>
    )
}