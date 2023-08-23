import { useFilterContext } from '../../../../filterContext/filterContext'
import ContactCard from './ContactCard/ContactCard';
import './ShowUser.scss'

const ShowUser = () => {

    const { userToShow, setUserToShow } = useFilterContext();

    const handleButton = () => {
        setUserToShow(null);
    }

    return (
        <div className='showUser_container'>
            <ContactCard userInfo={userToShow} />
            <button onClick={handleButton}>
                VOLVER
            </button>
        </div>
    )

}
export default ShowUser