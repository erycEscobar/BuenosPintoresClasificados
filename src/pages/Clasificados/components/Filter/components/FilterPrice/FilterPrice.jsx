import { useFilterContext } from '../../../../filterContext/filterContext';
import './FilterPrice.scss';

const FilterPrice = () => {

    const { filterByPrice, setFilterByPrice } = useFilterContext();

    const handleChange = (e) => {
        console.log(filterByPrice);
        setFilterByPrice({
            ...filterByPrice,
            [e.target.name]: e.target.value
        })
    };

    return (
        <div className='filterPrice'>
            <p>UN PRESUPUESTO PARA VOS</p>
            <label>
                Precio minimo 
                <input 
                    type="number" 
                    placeholder='ARS'
                    name='min'
                    value={filterByPrice.min}
                    onChange={handleChange}
                />
            </label>
            <label>
                Precio maximo
                <input 
                    type="number" 
                    placeholder='ARS'
                    name='max'
                    value={filterByPrice.max}
                    onChange={handleChange}
                />
            </label>
        </div>
    )
}
export default FilterPrice