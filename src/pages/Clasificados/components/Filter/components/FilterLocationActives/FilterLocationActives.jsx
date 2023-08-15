import { useFilterContext } from '../../../../filterContext/filterContext';
import './FilterLocationActives.scss';

const FilterLocationActives = () => {

    const { locationsFilter, setLocationsFilter } = useFilterContext();

    const handleRemoveLocation = (index) => {
        const updateLocations = [...locationsFilter];
        updateLocations.splice(index, 1);
        setLocationsFilter(updateLocations);
    }

    return (
        <section className='filterLocation_actives'>
            <ul>
                {locationsFilter.map((location, index) => {
                    return (
                        <li key={index}>
                            <p>{location}</p>
                            <button onClick={() => handleRemoveLocation(index)}>
                                x
                            </button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )

}
export default FilterLocationActives