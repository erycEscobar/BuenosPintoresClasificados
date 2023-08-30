import './UserProfile.scss';

import { UserLog } from '../../userContext/UserLogContext';
import SuscriptionCard from './components/SuscriptionCard/SuscriptionCard';
import { useState } from 'react';
import UserData from './components/UserData/UserData';
import ModifyData from './components/ModifyData/ModifyData';
import UserProyects from './components/UserProyects/UserProyects';


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

                        {(userInfo.plan1 || userInfo.plan2 || userInfo.plan3) ? (
                            <UserProyects />
                        ):(
                            <section className='userSuscriptions'>
                                <p className='userSuscriptions_Title'>
                                    Suscripciones
                                </p>
                                <ul>
                                    <li><SuscriptionCard planNumber={1} months={1} price={4300} recomended={false}/></li>
                                    <li><SuscriptionCard planNumber={2} months={6} price={9500} recomended={true} /></li>
                                    <li><SuscriptionCard planNumber={3} months={12} price={20000} recomended={false} /></li>
                                </ul>
                            </section>
                        )}      
                    </div>
                )}
        </div>
    )
    
}
export default UserProfile