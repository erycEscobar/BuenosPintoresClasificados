import { UserAuth } from '../../../../userContext/userContext';
import './SuscriptionCard.scss';
import { SuscriptionActivation } from './components/SuscriptionActivation.jsx/SuscriptionActivation';

const SuscriptionCard = ({planNumber, months, price, recomended}) => {
    
    const { userLogged } = UserAuth();
    const plan = 'plan' + planNumber;

    const handleComprar = () => {
        console.log({plan});
        SuscriptionActivation(plan, userLogged.uid);
    }

    return (
        <div className='suscriptionCard_container'>
            <div className='suscriptionCard_container'>
                <ul className='suscriptionCard'>
                    <li className='suscriptionCard_title'>
                        <p>PLAN {planNumber} </p>
                    </li>
                    <li className='suscriptionCard_description'>
                        <p>{months} mes de suscripcion</p>
                    </li>
                    <li className='suscriptionCard_price'>
                        <p>$ {price}</p>
                    </li>
                    <li className='suscriptionCard_button'>
                        <button onClick={handleComprar}>
                            COMPRAR
                        </button>
                    </li>
                </ul>
                {recomended && <p className='recomendedLabel' >RECOMENDADO!</p> }
            </div>
        </div>
    )

}
export default SuscriptionCard