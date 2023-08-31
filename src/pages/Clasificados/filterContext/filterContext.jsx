import { createContext, useContext, useState } from "react";
import { FilterOptionsList } from "../components/Filter/components/FilterOptions/FilterOptionsList";
import PropTypes from 'prop-types';

const FilterContext = createContext();

export const FilterContextProvider = ({children}) => {

    const [ userToShow, setUserToShow ] = useState(null);
    
    const [ selectedProyect, setSelectedProyect ] = useState(false);
    const [ proyectToShow, setProyectToShow ] = useState(null);
    const [ editProyect, setEditProyect ] = useState(false);
    
    const [ filterByPrice, setFilterByPrice ] = useState({min: '', max: ''});
    const [ selectedFilters, setSelectedFilters ] = useState(FilterOptionsList);
    const [ experienceFilter, setExperienceFilter ] = useState(0);
    const [ locationsFilter, setLocationsFilter ] = useState([]);
    const [ filterWorkTypes, setFilterWorkTypes ] = useState([{
        id: 1,
        label: 'Durlock',
        value: 'durlock',
        isChecked: false,
    }, 
    {
        id: 2,
        label: 'Exteriores',
        value: 'exteriores',
        isChecked: false,
    }, 
    {
        id: 3,
        label: 'Pintura De Madera',
        value: 'pinturaDeMadera',
        isChecked: false,
    }, 
    {
        id: 4,
        label: 'Trabajos En Altura',
        value: 'trabajosEnAltura',
        isChecked: false,
    },]);

    const sharedStates = {
        experienceFilter,
        setExperienceFilter,

        selectedFilters,
        setSelectedFilters,

        filterWorkTypes,
        setFilterWorkTypes,

        filterByPrice,
        setFilterByPrice,
        locationsFilter,
        setLocationsFilter,
        userToShow,
        setUserToShow,

        selectedProyect,
        setSelectedProyect,
        proyectToShow,
        setProyectToShow,

        setEditProyect,
        editProyect
    }

    //console.log({selectedFilters, locationsFilter});

    return (
        <FilterContext.Provider value={sharedStates}>
            {children}
        </FilterContext.Provider>
    )
}

FilterContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useFilterContext = () => {
    return useContext(FilterContext);
}