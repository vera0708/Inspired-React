import { useRef } from 'react';
// import { useEffect } from 'react';
import style from './Color.module.scss';

export const Color = ({ color, check }) => {
    console.log('check:  ', check);
    const activeElement = useRef(0);

    const checkedCircle = () => {
        console.log(activeElement.current)
        // activeElement.current = activeElement.current.checked();

    };

    return (
        <button
            // className={{check} => cn(style.color && style.colorCheck)}
            className={style.color}
            style={{ backgroundColor: `${color}` }}
            onClick={checkedCircle}
        ></button>
    )
} 