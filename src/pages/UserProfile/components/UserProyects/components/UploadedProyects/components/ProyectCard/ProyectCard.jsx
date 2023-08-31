import { useNavigate } from 'react-router-dom';
import { useFilterContext } from '../../../../../../../Clasificados/filterContext/filterContext';
import './ProyectCard.scss';
import PropTypes from 'prop-types';

const ProyectCard = ({id, proyect}) => {

    const { selectedProyect, setSelectedProyect, setProyectToShow, proyectToShow, editProyect } = useFilterContext();
    //const navigate = useNavigate();

    const handleClick = () => {
        if (proyectToShow === null) {
            setSelectedProyect(!selectedProyect);
            setProyectToShow(proyect);
        } else {
            if (proyectToShow === proyect) {
                setSelectedProyect(!selectedProyect);
                setProyectToShow(null);
            } else {
                setProyectToShow(proyect);
            }
        } 
        //editProyect && navigate('/UserProfile/NewUserProyect');
    }
    
    //console.log(id, proyect);

    return (
        <div className="proyectCard_container" onClick={handleClick}>
            <img src={proyect.images[0]} alt="" />
            <p className='proyectCard_title'>
                {proyect.workName}
            </p>
        </div>
    )
}

ProyectCard.propTypes = {
    id: PropTypes.string.isRequired,
    proyect: PropTypes.object.isRequired,
}

export default ProyectCard