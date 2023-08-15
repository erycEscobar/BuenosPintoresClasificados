import { useFilterContext } from '../../../../filterContext/filterContext';
import './FilterOptions.scss';

const FilterOptions = () => {

    const { selectedFilters, setSelectedFilters } = useFilterContext();

    const handleCheck = (optionId) => {
        const optionIndex = selectedFilters.findIndex(option => option.id === optionId);
        const updatedOptions = [...selectedFilters];
        updatedOptions[optionIndex] = {
          ...updatedOptions[optionIndex],
          isChecked: !updatedOptions[optionIndex].isChecked
        };
        setSelectedFilters(updatedOptions);
    };

    return (
        <section className='filter_options'>
            <ul>
                {selectedFilters.map((option) => {
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
        </section>
    )
    
}
export default FilterOptions