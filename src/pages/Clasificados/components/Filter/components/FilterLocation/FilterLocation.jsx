import { useFilterContext } from '../../../../filterContext/filterContext';
import LocationsDropDown from '../../../../../../components/LocationsDropdown/LocationsDropDown';

const FilterLocation = () => {

    const { locationsFilter, setLocationsFilter } = useFilterContext();

    const handleSelectedLocation = (location) => {
        setLocationsFilter([...locationsFilter, location]);
    }

    return (
        <section className='filterLocation_searcher'>
            <p>UN PINTOR CERCA DE TU LOCALIDAD</p>
            <LocationsDropDown locationSelected={handleSelectedLocation}/>
        </section>
    )

}
export default FilterLocation