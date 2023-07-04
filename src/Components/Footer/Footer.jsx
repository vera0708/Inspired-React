import { Development } from './Developement/Development';
import style from './Footer.module.scss';
import { Catalog } from "./Catalog/Catalog.jsx";
import { Contacts } from "./Contacts/Contacts.jsx";
import { Copyright } from "./Copyright/copyright.jsx";
import { Social } from './Social/Social';
import { Container } from '../Layout/Container/Container';
// import cn from 'classnames';
// import { NavLink } from 'react-router-dom';


// const list = [
//     {
//         link: 'women', title: 'Женщины', categories: [
//             { link: 'bras', title: 'Бюсгалтеры' },
//             { link: 'panties', title: 'Трусы' },
//             { link: 'socks', title: 'Носки' },
//             { link: 'bathrobes', title: 'Халаты' },
//             { link: 'thermal', title: 'Термобельё' },
//             { link: 'pijamas', title: 'Пижамы' },
//         ]
//     },
//     {
//         link: 'men', title: 'Мужчины', categories: [
//             { link: 'panties', title: 'Трусы' },
//             { link: 'socks', title: 'Носки' },
//             { link: 'bathrobes', title: 'Халаты' },
//             { link: 'thermal', title: 'Термобельё' },
//         ]
//     },
// ]

export const Footer = () => (
    <footer>
        <Container >
            <div className={style.container}>
                {/* <div className={style.category}>
                    <h2 className={cn(style.title, style.categoryTitle)}>Каталаог</h2>
                    <ul className={style.categoryList}>
                        {list.map((item) => (
                            <li key={item.link} className={style.categoryItem}>
                                <h3 className={style.categorySubtitle}>
                                    <NavLink to={item.link} className={style.link}>
                                        {item.title}
                                    </NavLink>
                                </h3>
                                <ul className={style.categorySublist}>
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
                </div> */}
                <Catalog />
                <Social />
                <Contacts />
                <Copyright />
                <Development />
            </div>
        </Container>
    </footer>
)