import { useState } from 'react';
import searchIcon from '../../../../../../assets/photos/searchIcon.png';
import { useFilterContext } from '../../../../filterContext/filterContext';

const FilterLocation = () => {

    const { locationsFilter, setLocationsFilter } = useFilterContext();
    const [ inputSearcher, setInputSearcher ] = useState('');

    const handleEnter = (e) => {
        if (e.key === 'Enter' && inputSearcher.trim() !== '' ) {
            setLocationsFilter([...locationsFilter, inputSearcher.trim()]);
            setInputSearcher('');
        }
    }

    const handleInputSearcher = (e) => {
        setInputSearcher(e.target.value)
    }

    return (
        <section className='filterLocation_searcher'>
            <input 
                type="text" 
                placeholder='Busca cerca de tu localidad'
                value={inputSearcher}
                onChange={handleInputSearcher}
                onKeyDown={handleEnter}
            />
            <img src={searchIcon} alt="" width='20px' />
        </section>
    )

}
export default FilterLocation