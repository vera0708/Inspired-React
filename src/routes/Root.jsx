import { Header } from "../Components/Header/Header.jsx";
import { Footer } from "../Components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { Main } from "../Components/Layout/Main/Main.jsx";

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
    {
        link: 'kids', title: 'Дети', categories: [
            { link: 'panties', title: 'Трусы' },
            { link: 'socks', title: 'Носки' },
            { link: 'pijamas', title: 'Пижамы' },
            { link: 'thermal', title: 'Термобельё' },
        ]
    },
]

export const Root = () => (
    <>
        <Header />
        <Main>
            <Outlet />
        </Main>
        <Footer list={list} />
    </>
)