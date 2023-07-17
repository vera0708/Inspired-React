import { Development } from './Developement/Development';
import style from './Footer.module.scss';
import { Catalog } from "./Catalog/Catalog.jsx";
import { Contacts } from "./Contacts/Contacts.jsx";
import { Social } from './Social/Social';
import { Container } from '../Layout/Container/Container';
import { Copyright } from './Copyright/Copyright';

export const Footer = () => (
    <footer>
        <Container >
            <div className={style.container}>
                <Catalog />
                <Social />
                <Contacts />
                <Copyright />
                <Development />
            </div>
        </Container>
    </footer>
)