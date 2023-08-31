import { useEffect, useState } from 'react';
import FilterExperience from './components/FilterExperience/FilterExperience';
import FilterLocation from './components/FilterLocation/FilterLocation';
import FilterLocationActives from './components/FilterLocationActives/FilterLocationActives';
import FilterPrice from './components/FilterPrice/FilterPrice';
import FilterWorkType from './components/FilterWorkType/FilterWorkType';
import './Filter.scss';

const Filter = () => {

    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const [ showFilters, setShowFilters ] = useState(false)

    useEffect(() => {
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', updateWindowWidth);
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        }
    }, [])

    const mobile = (windowWidth <= 768) && true;

    const handleClick = () => {
        setShowFilters(!showFilters);
    }

    return (
        <div className='filter_container'>
            {!mobile ? (
                <div className='filter'>
                    <section className='filter_header'>
                        <p> ENCONTRA LO QUE ESTAS BUSCANDO </p>
                    </section>
                    <span className='filter_lineSeparator'></span>
                    <FilterLocation />
                    <FilterLocationActives />
                    <span className='filter_lineSeparator'></span>
                    <FilterPrice />
                    <span className='filter_lineSeparator'></span>
                    <FilterWorkType />
                    <span className='filter_lineSeparator'></span>              
                </div>
            ):(
                ( showFilters ? (
                    <div className='filter'>
                        <section className='filter_header'>
                            <p> ENCONTRA LO QUE ESTAS BUSCANDO </p>
                        </section>
                        <span className='filter_lineSeparator'></span>
                        <FilterLocation />
                        <FilterLocationActives />
                        <span className='filter_lineSeparator'></span>
                        <FilterPrice />
                        <span className='filter_lineSeparator'></span>
                        <FilterWorkType />
                        <span className='filter_lineSeparator'></span>              
                    </div>
                ) : (
                    <></>
            )))}
            {mobile && <button className='buttonFilter' onClick={handleClick}>BUSCAR</button>}
        </div>
    )
}
export default Filter