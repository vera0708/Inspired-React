import { NavLink } from 'react-router-dom';
import { Container } from '../Layout/Container/Container';
import style from './Banner.module.scss';
import { API_URL } from '../../const';
import { useEffect } from 'react';
import { useMedia } from 'react-use';

export const Banner = ({ data }) => {
    console.log('data: ', data)

    const isMobile = useMedia('(max-width: 540px)');
    const isTablet = useMedia('(max-width: 768px)');
    const isLaptop = useMedia('(max-width: 1024px)');

    useEffect(() => {
        if (isMobile) {
            // const dataBg = 'data.bg.mobile';
            console.log('Мобильное разрешение');
        } else if (isTablet) {
            // const dataBg = 'data.bg.tablet';
            console.log('Разрешение планшета');
        } else if (isLaptop) {
            // const dataBg = 'data.bg.laptop';
            console.log('Разрешение ноутбука');
        } else {
            // const dataBg = 'data.bg.desktop';
            console.log('Десктопное разрешение');
        }
        // return dataBg;
    }, [isMobile, isTablet, isLaptop]);

    return (
        data &&
        <section className={style.banner}
            style={{
                backgroundImage: `url(${API_URL}${data.bg.desktop})`
                // backgroundImage: `url(${API_URL}${dataBg})`
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