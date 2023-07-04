import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import style from './Category.module.scss'

const list = [
    { link: 'bras', title: 'Бюсгалтеры' },
    { link: 'panties', title: 'Трусы' },
    { link: 'socks', title: 'Носки' },
    { link: 'bathrobes', title: 'Халаты' },
    { link: 'thermal', title: 'Термобельё' },
    { link: 'pijamas', title: 'Пижамы' },
]

export const Category = () => (
    <ul className={style.category}>
        {list.map(item => (
            <li key={item.link} className={style.item}>
                <NavLink
                    className={({ isActive }) => cn(style.link, isActive && style.linkActive)} to={item.link}>
                    {item.title}
                </NavLink>
            </li>
        ))}
    </ul>
)