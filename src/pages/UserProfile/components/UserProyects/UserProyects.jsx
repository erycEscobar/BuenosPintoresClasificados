import { UserLog } from '../../../../userContext/UserLogContext';
import { UserAuth } from '../../../../userContext/userContext';
import NewUserProyectCard from './components/NewUserProyectCard/NewUserProyectCard';
import UploadedProyects from './components/UploadedProyects/UploadedProyects';
import './UserProyects.scss';
import { useFilterContext } from '../../../Clasificados/filterContext/filterContext';

const UserProyects = () => {
    
    const { userLogged } = UserAuth();
    const { userInfo } = UserLog();
    const { setEditProyect } = useFilterContext();

    setEditProyect(true);

    //console.log(userInfo.trabajosRealizados, userLogged.uid)

    return (
        <div className='userProyects_container'>
            <div className='scrolling-wrapper'>
                <NewUserProyectCard />
                {userInfo.trabajosRealizados > 0 && <UploadedProyects userId={userLogged.uid} />}
            </div>
        </div>
    )

}
export default UserProyects