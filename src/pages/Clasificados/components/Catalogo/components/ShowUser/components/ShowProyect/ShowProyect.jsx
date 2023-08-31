import './ShowProyect.scss';
import PropTypes from 'prop-types';

const ShowProyect = ({proyect}) => {

    return (
        <div className='showProyect_container'>
            <ul className='showProyect_infoList'>
                <li className='showProyect_workName'>{proyect.workName}</li>
                <li className='showProyect_workTypesContainer'>
                    <ul className='showProyect_workTypes'>
                        <li>Servicios Ofrecidos:</li>
                        {proyect.types.durlock && <li>Durlock</li>}
                        {proyect.types.exteriores && <li>Exteriores</li>}
                        {proyect.types.pinturaEnMadera && <li>Pintura En Madera</li>}
                        {proyect.types.trabajosEnAltura && <li>Trabajos En Altura</li>}
                    </ul>
                </li>
                <li className='showProyect_workDescriptionContainer'>
                    <ul className='showProyect_workDescription'>
                        <li>Descripcion Del Trabajo:</li>
                        <li>{proyect.description}</li>
                    </ul>
                </li>
            </ul>
                <div className='showProyect_photoContainer'>
                    <ul className='showProyect_photoGallery'>
                        {(proyect.images).map((image, index) => {
                            return (
                                <li key={index} className='showProyect_photo'>
                                    <img src={image} alt=""/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
        </div>
    )
}

ShowProyect.propTypes = {
    proyect: PropTypes.object.isRequired,
}

export default ShowProyect