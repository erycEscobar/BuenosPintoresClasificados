import FilterLocation from './components/FilterLocation/FilterLocation';
import FilterLocationActives from './components/FilterLocationActives/FilterLocationActives';
import FilterOptions from './components/FilterOptions/FilterOptions';
import './Filter.scss';

const Filter = () => {

    return (
        <div className='filter_container'>
            <div className='filter'>
                <section className='filter_header'>
                    <p> ENCONTRA LO QUE ESTAS BUSCANDO </p>
                </section>

                <FilterLocation />
                <FilterLocationActives />
                <FilterOptions />
                

                </div>
            </div>
    )
}
export default Filter