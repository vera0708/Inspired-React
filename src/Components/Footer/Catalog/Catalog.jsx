import { Navigation } from '../../Header/Navigation/Navigation';
import style from './Catalog.module.scss';

export const Catalog = () => (
    <div className={style.category}>
        <h3 className={style.title}>Каталог</h3>
        <Navigation className={style.list} />
    </div>
)