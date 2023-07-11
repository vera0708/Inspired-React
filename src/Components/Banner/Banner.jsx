import { NavLink } from 'react-router-dom';
import { Container } from '../Layout/Container/Container';
import style from './Banner.module.scss';
import { API_URL } from '../../const';
import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';

export const Banner = ({ data }) => {

    const isMobile = useMedia('(max-width: 540px)');
    const isTablet = useMedia('(max-width: 768px)');
    const isLaptop = useMedia('(max-width: 1024px)');

    const [bgURL, setBgURL] = useState('');

    useEffect(() => {
        if (isMobile) {
            setBgURL(`${API_URL}${data?.bg.mobile}`);
            console.log('Мобильное разрешение');
        } else if (isTablet) {
            setBgURL(`${API_URL}${data?.bg.tablet}`);
            console.log('Разрешение планшета');
        } else if (isLaptop) {
            setBgURL(`${API_URL}${data?.bg.laptop}`);
            console.log('Разрешение ноутбука');
        } else {
            setBgURL(`${API_URL}${data?.bg.desktop}`);
            console.log('Десктопное разрешение');
        }
    }, [data, isMobile, isTablet, isLaptop]);

    return (
        data &&
        <section className={style.banner}
            style={{
                backgroundImage: `url(${bgURL})`
            }}>
            <Container>
                <div className={style.content}>
                    <h2 className={style.title}>{data.description}</h2>
                    <NavLink className={style.link}
                        to={`/product/${data.id}`}>
                        ПЕРЕЙТИ
                    </NavLink>
                </div>
            </Container>
        </section>
    )
}