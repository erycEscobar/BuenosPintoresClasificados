import { UserLog } from '../../../../userContext/UserLogContext';
import { UserAuth } from '../../../../userContext/userContext';
import NewUserProyectCard from './components/NewUserProyectCard/NewUserProyectCard';
import UploadedProyects from './components/UploadedProyects/UploadedProyects';
import './UserProyects.scss';

const UserProyects = () => {
    
    const { userLogged } = UserAuth();
    const { userInfo } = UserLog();

    console.log(userInfo.trabajosRealizados, userLogged.uid)

    return (
        <div className='userProyects_container'>
            {userInfo.trabajosRealizados > 0 &&
                <UploadedProyects userId={userLogged.uid} />
            }
            <NewUserProyectCard />
        </div>
    )

}
export default UserProyects