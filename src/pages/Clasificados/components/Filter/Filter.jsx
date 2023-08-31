import FilterExperience from './components/FilterExperience/FilterExperience';
import FilterLocation from './components/FilterLocation/FilterLocation';
import FilterLocationActives from './components/FilterLocationActives/FilterLocationActives';
import FilterPrice from './components/FilterPrice/FilterPrice';
import FilterWorkType from './components/FilterWorkType/FilterWorkType';
import './Filter.scss';

const Filter = () => {

    return (
        <div className='filter_container'>
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
            </div>
    )
}
export default Filter