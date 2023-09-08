import './UserProfile.scss';

import { UserLog } from '../../userContext/UserLogContext';
import SuscriptionCard from './components/SuscriptionCard/SuscriptionCard';
import { useState } from 'react';
import UserData from './components/UserData/UserData';
import ModifyData from './components/ModifyData/ModifyData';
import UserProyects from './components/UserProyects/UserProyects';
import { FilterContextProvider } from '../Clasificados/filterContext/filterContext';
import Loader from '../../components/Loader/Loader'


const UserProfile = () => {
    
    const { userInfo } = UserLog();
    const [ modify, setModify ] = useState(false);
    const [ loader, setLoader ] = useState(true);
    
    if (loader) {
        !(Object.keys(userInfo).length === 0) && setLoader(false);
    }

    const viewModify = () => {
        setModify(!modify);
    }

    return (
        <FilterContextProvider>
            {loader ? (
                <Loader />
            ):(

            <div className='userProfile_container'>
                    { modify ? (
                        <ModifyData handleBack={viewModify} />
                    ) : (
                        <div className='userProfile'>

                            <div className='userProfileData_container'>
                                <UserData userInfo={userInfo} />
                                <section className='modifyData'>
                                    <button onClick={viewModify}>
                                        Modificar mis datos
                                    </button>
                                </section>
                
                                
                            </div>

                            <div className='userCards_container'>
                                {(userInfo.plan1 || userInfo.plan2 || userInfo.plan3) ? (
                                    <UserProyects />
                                ):(
                                    <section className='userSuscriptions'>
                                        <p className='userSuscriptions_Title'>
                                            Suscripciones
                                        </p>
                                        <ul>
                                            <li><SuscriptionCard planNumber={1} months={1} price={4300} recomended={false} /></li>
                                            <li><SuscriptionCard planNumber={2} months={6} price={9500} recomended={true} /></li>
                                            <li><SuscriptionCard planNumber={3} months={12} price={20000} recomended={false} /></li>
                                        </ul>
                                    </section>
                                )}      
                            </div>
                        </div>
                    )}
            </div>
            )}
        </FilterContextProvider>
    )
    
}
export default UserProfile