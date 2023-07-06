import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import cn from 'classnames';
import style from './Category.module.scss'

export const Category = ({ list }) => {
    const location = useLocation();
    const gender = location.pathname.split('/')[1] || 'women';
    const categoriesList = list.find(item => item.link === gender);

    return (
        <ul className={style.category}>
            {categoriesList.categories.map(item => (
                // item.categories.map(category => (
                <li key={item.link} className={style.item}>
                    <NavLink
                        //to={`${item.link}/${category.link}`}
                        //className={style.link}>
                        to={`${gender}/${item.link}`}
                        className={({ isActive }) =>
                            cn(style.link, isActive && style.linkActive)}>
                        {item.title}
                    </NavLink>
                </li>
                //))
                //  }
            ))}
        </ul>
    )
}