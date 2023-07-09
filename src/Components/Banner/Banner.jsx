import { NavLink } from 'react-router-dom';
import { Container } from '../Layout/Container/Container';
import style from './Banner.module.scss';
import { API_URL } from '../../const';

export const Banner = ({ data }) => (
    data &&
    <section className={style.banner}
        style={{
            backgroundImage: `url(${API_URL}${data.bg.desktop})`
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