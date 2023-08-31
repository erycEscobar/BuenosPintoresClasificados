import { useState } from 'react';
import './TerminosCondiciones.scss';
import TerminosCondicionesText from './TerminosCondicionesText';

const TerminosCondiciones = ({accepted, setAccepted}) => {
    
    const handleCheckboxChange = () => {
          setAccepted(!accepted);
    };   
    
    return (
        <div>
            <h2>Términos y condiciones de uso</h2>
            <TerminosCondicionesText />
            <label>
                <input
                type="checkbox"
                checked={accepted}
                onChange={handleCheckboxChange}
            />
                Acepto los términos y condiciones.
            </label>
        </div>
      );
    }
    
export default TerminosCondiciones