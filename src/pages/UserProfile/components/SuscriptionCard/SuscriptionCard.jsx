import axios from 'axios';
import { UserAuth } from '../../../../userContext/userContext';
import './SuscriptionCard.scss';
import { SuscriptionActivation } from './components/SuscriptionActivation.jsx/SuscriptionActivation';
import { useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import queryString from 'query-string';

initMercadoPago('APP_USR-a282cd2b-aacb-4760-9fb5-f4a0d1a375f8');

const SuscriptionCard = ({planNumber, months, price, recomended}) => {
    
    const { userLogged } = UserAuth();
    const plan = 'plan' + planNumber;
    const [preferenceId, setPreferenceId] = useState();
    const devMode = import.meta.env.DEV;

    const handleComprar = async () => {
        const req = await axios.get(devMode ? `/api/app/create-preference?plan=${planNumber}` : `https://us-central1-buenospintores-23a2b.cloudfunctions.net/app/create-preference?plan=${planNumber}`);
        setPreferenceId(req.data.id);
    }

    const handleOnSubmit = () => {
        setPreferenceId(null);
    }

    useEffect(() => {
        handleCheckPayment();
    }, [])

    const handleCheckPayment = async () => {
        if (window.location.search.length) {
            const params = queryString.parse(window.location.search);
            const paymentId = params.payment_id;
    
            const req = await axios.get(devMode ? `https://us-central1-buenospintores-23a2b.cloudfunctions.net/app/notificaciones?id=${paymentId}` : `/api/app/notificaciones?id=${paymentId}`);
            const statusPayment = req.data.paymentInfo.body.status;
            
            if (statusPayment === 'approved') {
                SuscriptionActivation(plan, userLogged.uid);
            }
        }
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
                        {!preferenceId ? <button onClick={handleComprar}>
                            COMPRAR
                        </button>
                        : <Wallet onSubmit={handleOnSubmit} locale='es-AR' initialization={{ preferenceId: preferenceId, redirectMode: 'self' }} />
                        }
                    </li>
                </ul>
                {recomended && <p className='recomendedLabel' >RECOMENDADO!</p> }
            </div>
        </div>
    )

}
export default SuscriptionCard