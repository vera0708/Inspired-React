import { Container } from '../Layout/Container/Container';
import style from './Search.module.scss';

export const Search = ({ openSearch }) => {
    return (
        openSearch &&
        <div className={style.search}>
            <Container>
                <form className={style.form}>
                    <input
                        className={style.input}
                        type='search'
                        name='search'
                        placeholder='Найти...'
                    />
                    <button className={style.btn} type='submit'>Искать</button>
                </form>
            </Container>
        </div>
    )
}