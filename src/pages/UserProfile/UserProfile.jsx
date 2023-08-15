import './UserProfile.scss';

import { UserLog } from '../../userContext/UserLogContext';
import SuscriptionCard from './components/SuscriptionCard/SuscriptionCard';
import { useState } from 'react';
import UserData from './components/UserData/UserData';
import ModifyData from './components/ModifyData/ModifyData';


const UserProfile = () => {
    
    const { userInfo } = UserLog();
    const [ modify, setModify ] = useState(false);

    const viewModify = () => {
        console.log(userInfo);
        setModify(!modify);
    }

    return (

        <div className='userProfile_container'>
                { modify ? (
                    <ModifyData handleBack={viewModify} />
                ) : (
                    <div className='userProfile'>

                        <section className='modifyData'>
                            <button onClick={viewModify}>
                                Modificar mis datos
                            </button>
                        </section>
        
                        <UserData userInfo={userInfo} />
        
                        <section className='userSuscriptions'>
                            <p>
                                Suscripciones
                            </p>
                            <ul>
                                <li><SuscriptionCard /></li>
                                <li><SuscriptionCard /></li>
                                <li><SuscriptionCard /></li>
                            </ul>
                        </section>
        
                    </div>
                )}
                </div>
    )
    
}
export default UserProfile