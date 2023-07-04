import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import style from './Catalog.module.scss';

const list = [
    {
        link: 'women', title: 'Женщины', categories: [
            { link: 'bras', title: 'Бюсгалтеры' },
            { link: 'panties', title: 'Трусы' },
            { link: 'socks', title: 'Носки' },
            { link: 'bathrobes', title: 'Халаты' },
            { link: 'thermal', title: 'Термобельё' },
            { link: 'pijamas', title: 'Пижамы' },
        ]
    },
    {
        link: 'men', title: 'Мужчины', categories: [
            { link: 'panties', title: 'Трусы' },
            { link: 'socks', title: 'Носки' },
            { link: 'bathrobes', title: 'Халаты' },
            { link: 'thermal', title: 'Термобельё' },
        ]
    },
]

export const Catalog = () => (
    <div className={style.category}>
        <h2 className={cn(style.title, style.categoryTitle)}>Каталог</h2>
        <ul className={style.list}>
            {list.map((item) => (
                <li key={item.link} className={style.item}>
                    <h3 className={style.subtitle}>
                        <NavLink to={item.link} className={style.link}>
                            {item.title}
                        </NavLink>
                    </h3>
                    <ul className={style.sublist}>
                        {item.categories.map(category => (
                            <li key={category.link}>
                                <NavLink to={`${item.link}/${category.link}`}
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