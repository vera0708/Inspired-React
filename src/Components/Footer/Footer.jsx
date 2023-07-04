import { Development } from './Developement/Development';
import style from './Footer.module.scss';
import { Catalog } from "./Catalog/Catalog.jsx";
import { Contacts } from "./Contacts/Contacts.jsx";
import { Copyright } from "./Copyright/copyright.jsx";
import { Social } from './Social/Social';

// import { Social } from './Social/Social.jsx';

export const Footer = () => (
    <footer className={style.container}>
        <Catalog />
        <Social />
        <Contacts />
        <Copyright />
        <Development />
    </footer>
)