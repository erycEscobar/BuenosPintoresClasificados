import './ProyectCard.scss';
import PropTypes from 'prop-types';

const ProyectCard = ({id, proyect}) => {

    console.log(id, proyect);

    return (
        <div className="proyectCard_container">
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