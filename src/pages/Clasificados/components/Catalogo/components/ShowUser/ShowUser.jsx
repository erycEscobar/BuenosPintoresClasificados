
import { useFilterContext } from '../../../../filterContext/filterContext';
import ContactCard from './components/ContactCard/ContactCard';
import './ShowUser.scss'

const ShowUser = () => {

    const { userToShow, setUserToShow, setSelectedProyect, setProyectToShow } = useFilterContext();

    const handleButton = () => {
        setUserToShow(null);
        setSelectedProyect(false);
        setProyectToShow(null);
    }

    return (
        <div className='showUser_container'>
            <ContactCard userInfo={userToShow.data} userId={userToShow.id} />
            <button onClick={handleButton}>
                VOLVER
            </button>
        </div>
    )

}
export default ShowUser