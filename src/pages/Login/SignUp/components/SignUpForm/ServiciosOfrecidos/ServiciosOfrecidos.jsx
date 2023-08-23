import './ServiciosOfrecidos.scss';
import { ServicesInfo } from '../../../ServicesInfo';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ServiciosOfrecidos = ({userForm, setUserForm}) => {

    const [ servicios, setServicios ] = useState(ServicesInfo);

    const handleCheck = (optionId, optionName) => {
        const optionIndex = servicios.findIndex(option => option.id === optionId);
        const updatedOptions = [...servicios];
        updatedOptions[optionIndex] = {
          ...updatedOptions[optionIndex],
          isChecked: !updatedOptions[optionIndex].isChecked,
        };
        setServicios(updatedOptions);
        setUserForm(userForm => ({
            ...userForm,
            [optionName]: !userForm[optionName],
        }));
    };

    return (
        <div className='filter_options'>
            <ul>
                
                {servicios.map((option) => {
                    return (
                        <li key={option.id}>
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={option.isChecked}
                                    onChange={() => handleCheck(option.id, option.name)}
                                />
                                <p>
                                    {option.label}
                                </p> 
                            </label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

ServiciosOfrecidos.propTypes = {
    userForm: PropTypes.object.isRequired,
    setUserForm: PropTypes.func.isRequired,
};

export default ServiciosOfrecidos