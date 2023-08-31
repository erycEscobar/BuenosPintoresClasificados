import { useFilterContext } from '../../../../filterContext/filterContext';
import './FilterWorkType.scss';

const FilterWorkType = () => {

    const { filterWorkTypes, setFilterWorkTypes } = useFilterContext();

    const handleCheck = (optionId) => {
        const optionIndex = filterWorkTypes.findIndex(option => option.id === optionId);
        const updatedOptions = [...filterWorkTypes];
        updatedOptions[optionIndex] = {
          ...updatedOptions[optionIndex],
          isChecked: !updatedOptions[optionIndex].isChecked
        };
        setFilterWorkTypes(updatedOptions);
    };

    return (
        <div className='filterWorkType'>
            <p>UN TIPO DE TRABAJO</p>
            <ul>
                {filterWorkTypes.map((option) => {
                    return (
                        <li key={option.id}>
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={option.isChecked}
                                    onChange={() => handleCheck(option.id)}
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
export default FilterWorkType