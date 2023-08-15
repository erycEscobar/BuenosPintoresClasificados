
import './Clasificados.scss'
import Catalogo from './components/Catalogo/Catalogo'
import Filter from './components/Filter/Filter'
import { FilterContextProvider } from './filterContext/filterContext'

const Clasificados = () => {

    return (
        <div className='clasificados_container'>
            <FilterContextProvider>
                <Filter />
                <div className='clasificados_column02'>
                    <Catalogo />
                </div>
            </FilterContextProvider>
        </div>
    )
}
export default Clasificados