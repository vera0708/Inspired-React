import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import style from './Catalog.module.scss';
import { useSelector } from 'react-redux';

export const Catalog = () => {
    const { genderList, categories } = useSelector(state => state.navigation);
    console.log(genderList);
    console.log(categories);


    return (
        <div className={style.category}>
            <h2 className={cn(style.title, style.categoryTitle)}>Каталог</h2>
            <ul className={style.list}>
                {genderList.map((gender) => (
                    <li key={gender} className={style.item}>
                        <h3 className={style.subtitle}>
                            <NavLink to={`/catalog/${gender}`} className={style.link}>
                                {categories[gender].title}
                            </NavLink>
                        </h3>
                        <ul className={style.sublist}>
                            {categories[gender].list.map(category => (
                                <li key={category.slug}>
                                    <NavLink to={`/catalog/${gender}/${category.slug}`}
                                        className={style.link}>
                                        {category.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}