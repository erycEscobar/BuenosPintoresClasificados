import { UserAuth } from '../../userContext/userContext';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {

    const { userLogged } = UserAuth();

    return (
        <div className='home_container'>
            <div className='startPage_container'>
                <Link className='startPageUser_container' to='/Clasificados'>
                    <p>
                        Deseo <span>CONTRATAR</span> los servicios de un pintor
                    </p>
                </Link>
                {!userLogged && (
                    <Link className='startPageUser_container' to='/LogScreen'>
                        <p>
                            Deseo <span>PUBLICAR</span> mis servicios como pintor
                        </p>
                    </Link>
                )}
            </div>
        </div>
    )
}
export default Home