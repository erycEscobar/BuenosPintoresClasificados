import UserData from '../../../../../UserProfile/components/UserData/UserData';
import { useFilterContext } from '../../../../filterContext/filterContext'
import './ShowUser.scss'

const ShowUser = () => {

    const { userToShow, setUserToShow } = useFilterContext();

    const handleButton = () => {
        setUserToShow(null);
    }

    return (
        <div className='showUser_container'>
            <UserData userInfo={userToShow} />
            <button onClick={handleButton}>
                VOLVER
            </button>
        </div>
    )

}
export default ShowUser