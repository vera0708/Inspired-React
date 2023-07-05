import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import style from './Category.module.scss'

export const Category = ({ list }) => (
    <ul className={style.category}>
        {list.map(item => (
            //                         {item.categories.map(category => (
            //                             <li key={item.categories.link}>
            //                                 <NavLink to={`${item.link}/${item.categories.link}`}
            //                                     className={style.link}>
            //                                     {item.categories.title}
            //                                 </NavLink>
            //                             </li>
            //                         ))}
            <li key={item.categories.link} className={style.item}>
                <NavLink
                    className={({ isActive }) => cn(style.link, isActive && style.linkActive)}
                    to={item.categories.link}>
                    {item.categories.title}
                </NavLink>
            </li>
        ))}
    </ul>
)