import './Logo.scss';
import { Link } from 'react-router-dom';

const Logo = () => {

    return (
        <section className='logo_container'>
            <Link to='./'>
                BuenosPintores/<span>Clasificados</span>
            </Link>
        </section>
    )
}
export default Logo