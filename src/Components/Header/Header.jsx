import { Navigation } from "./Navigation/Navigation.jsx";
import { Top } from "./Top/Top.jsx";
import style from './Header.module.scss'
import { Search } from "../Search/Search.jsx";
import { useState } from "react";

export const Header = () => {
    const [openSearch, setOpenSearch] = useState(false)

    return (
        <header className={style.header}>
            <Top setOpenSearch={setOpenSearch} openSearch={openSearch} />
            <Search openSearch={openSearch} />
            <Navigation />
        </header>
    )
}