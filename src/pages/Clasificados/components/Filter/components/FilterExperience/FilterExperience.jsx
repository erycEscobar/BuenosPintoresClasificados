import { useFilterContext } from '../../../../filterContext/filterContext';
import './FilterExperience.scss';

const FilterExperience = () => {

    const { experienceFilter, setExperienceFilter } = useFilterContext();

    

    return (
        <div className='filterExperience_container'>
            <p>UN PINTOR CON EXPERIENCIA</p>
            <ul>
                <li>
                    <label>
                        <input 
                            type="checkbox" 
                            
                            name="" id="" 
                        />
                        <p>
                            +5 Trabajos realizados
                        </p>
                    </label>
                </li>
            </ul>
        </div>
    )

}
export default FilterExperience