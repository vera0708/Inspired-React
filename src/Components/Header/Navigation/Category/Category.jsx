import { NavLink } from 'react-router-dom'
//import { useLocation } from 'react-router-dom'
// import cn from 'classnames';
import style from './Category.module.scss'

export const Category = ({ list }) => (
    //   let location = useLocation();

    <ul className={style.category}>
        {list.map(item => (
            //  if (className={cn(style.link, isActive && style.linkActive)}) {
            // ...
            //  <NavLink to={`${location.pathname}/${category.link}`}
            item.categories.map(category => (
                <li key={item.categories.link}>
                    <NavLink to={`${item.link}/${category.link}`}
                        className={style.link}>
                        {category.title}
                    </NavLink>
                </li>
            ))
            //  }
        ))}
    </ul>
)