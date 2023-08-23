import './NewUserProyectCard.scss';
import addIcon from '../../../../../../assets/photos/addIcon.png';
import { useNavigate } from 'react-router-dom';


const NewUserProyect = () => {

    const navigate = useNavigate();

    const handleNewProyect = () => {
        navigate('/UserProfile/NewUserProyect');
    };

    return (
        <div className='newUserProyectCard_container' onClick={handleNewProyect}>
            <p className='newUserProyectCard_instruction'>
                Añade tus trabajos
            </p>
            <img className='newUserProyectCard_icon' src={addIcon} alt=""/>
        </div>
    )

}
export default NewUserProyect