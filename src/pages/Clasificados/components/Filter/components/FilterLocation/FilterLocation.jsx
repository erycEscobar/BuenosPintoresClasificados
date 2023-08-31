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
            <p>UN PINTOR CERCA DE TU LOCALIDAD</p>
            <div>
                <input 
                    type="text" 
                    placeholder='Localidad'
                    value={inputSearcher}
                    onChange={handleInputSearcher}
                    onKeyDown={handleEnter}
                />
                <img src={searchIcon} alt="" width='20px' />
            </div>
        </section>
    )

}
export default FilterLocation