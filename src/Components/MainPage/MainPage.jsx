import { useParams } from "react-router-dom"
import { Container } from "../Layout/Container/Container";
import { useState } from "react";

export const MainPage = ({ startGender = 'women' }) => {
    const { category } = useParams();

    const [gender, setGender] = useState(startGender || 'women');
    console.log('state MainPage: ', gender);

    return (
        <Container>
            <div>MainPage {gender}</div>
            {category && <p>Категория: {category}</p>}
            <button onClick={() => { setGender('women') }}>Женское</button>
            <button onClick={() => { setGender('men') }}>Мужское</button>
            <button onClick={() => { setGender('kids') }}>Детское</button>
        </Container>
    )
};