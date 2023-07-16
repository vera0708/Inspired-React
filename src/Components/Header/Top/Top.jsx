import { Container } from "../../Layout/Container/Container.jsx";
import cn from 'classnames';
import style from './Top.module.scss';
import { ReactComponent as LikeSvg } from '../../../assets/heart.svg';
import { ReactComponent as CartSvg } from '../../../assets/cart.svg';
import { ReactComponent as SearchSvg } from '../../../assets/search.svg';
import logo from '/src/assets/logo.svg';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Top = ({ setOpenSearch, openSearch }) => {
    const { countItems } = useSelector(state => state.cart);

    const handleOpenSearch = () => {
        setOpenSearch(!openSearch)
    }


    return (
        <div className={style.top}>
            <Container className={style.container}>
                <a className={cn(style.link, style.phone)} href="tel: 89304902620">8 930 490 26 20</a>
                <NavLink className={style.logo} to="/">
                    <img src={logo} alt="Логотип Inspired" />
                </NavLink>
                <div className={style.navigation}>
                    <ul className={style.navList}>
                        <li className={style.navItem}>
                            <button
                                className={style.link}
                                onClick={handleOpenSearch}
                            >
                                <SearchSvg />
                            </button>
                        </li>
                        <li className={style.navItem}>
                            <NavLink to='/cart' className={style.link}>
                                <CartSvg />
                                <span className={style.linkCount}>{countItems}</span>
                            </NavLink>
                        </li>
                        <li className={style.navItem}>
                            <NavLink to='/favorite' className={cn(style.link, style.like)}>
                                <LikeSvg />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}