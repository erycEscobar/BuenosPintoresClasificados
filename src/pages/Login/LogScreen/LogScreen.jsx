import { Link } from "react-router-dom";
import './LogScreen.scss';

const LogScreen = () => {
    return (
        <div className='pintorUser_container'>
            <div className='pintorUser_start'>
                <p>
                    Si todavia no tienes una cuenta, aqui puedes
                </p>
                <Link to='/SignUp'>
                    CREAR UNA CUENTA
                </Link>
            </div>
            <div className='pintorUser_start'>
                <p>
                    Si ya tienes una cuenta, aqui puedes
                </p>
                <Link to='/SignIn'>
                    INICIAR SESION
                </Link>
            </div>
        </div>
    )
}
export default LogScreen