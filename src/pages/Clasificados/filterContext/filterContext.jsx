import { createContext, useContext, useState } from "react";
import { FilterOptionsList } from "../components/Filter/components/FilterOptions/FilterOptionsList";

const FilterContext = createContext();

export const FilterContextProvider = ({children}) => {

    const [ selectedFilters, setSelectedFilters ] = useState(FilterOptionsList);
    const [ locationsFilter, setLocationsFilter ] = useState([]);

    const sharedStates = {
        selectedFilters,
        setSelectedFilters,
        locationsFilter,
        setLocationsFilter
    }

    //console.log({selectedFilters, locationsFilter});

    return (
        <FilterContext.Provider value={sharedStates}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}