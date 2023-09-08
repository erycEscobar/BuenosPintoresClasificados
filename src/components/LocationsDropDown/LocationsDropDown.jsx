import { useState } from 'react';
import './LocationsDropDown.scss';
import { useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const LocationsDropDown = ({locationSelected}) => {

    const [ localidades, setLocalidades ] = useState([]);
    const [ selected, setSelected ] = useState('Selecciona una localidad');  

    useEffect(() => {
        axios.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=6&campos=id,nombre&max=150`)
        .then((res) => {
            setLocalidades(res.data.municipios);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);    

    function findById(id, array) {
        return array.find(object => object.id === id);
    }

    const handleSelect = (location) => {
        let locationId = location.target.value;
        let selectedLocation = findById(locationId, localidades);
        console.log(localidades);
        console.log(selectedLocation);
        console.log(location.target.value);
        setSelected(selectedLocation.id);
        locationSelected(selectedLocation.nombre);
    }
    
    return (
        <div>
            <select className='locationsDropDown' name="localidad" id="localidad" value={selected} onChange={handleSelect}>
                {localidades.map((localidad) => (
                    <option key={localidad.id} value={localidad.id}>
                        {localidad.nombre}
                    </option>
                ))}
            </select>
        </div>
    )
}

LocationsDropDown.propTypes = {
    locationSelected: PropTypes.func.isRequired,
}

export default LocationsDropDown