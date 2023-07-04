import { Category } from "../../Header/Navigation/Category/Category.jsx";
import { Gender } from "../../Header/Navigation/Gender/Gender.jsx";
import style from './Catalog.module.scss';

export const Catalog = () => (
    <div className={style.category}>
        <p className={style.title}>Каталог</p>
        <ul className={style.list}>
            <Gender />
            <Category />
        </ul>

    </div>
)