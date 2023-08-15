import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import './Catalogo.scss';
import { useEffect, useState } from 'react';
import Loader from '../../../../components/Loader/Loader';
import ListUsers from './components/ListUsers/ListUsers';
import { useFilterContext } from '../../filterContext/filterContext';

const Catalogo = () => {

    const { locationsFilter, selectedFilters } = useFilterContext();
    const [ users, setUsers ] = useState([]);
    const [ loader, setLoader ] = useState(true);
    const firebase = getFirestore();

    useEffect(() => {
        const usersCollection = collection(firebase, `Users`);
        let usersNeeded = query(usersCollection);
        
        if (locationsFilter && locationsFilter.length > 0) {
            locationsFilter.map(filter => console.log(filter));
            usersNeeded = query(usersCollection, where('localidad', 'in', locationsFilter.map(filter => filter)));
        }
/*

const activeSelectedFilters = selectedFilters.filter(filter => filter.isChecked);
console.log({activeSelectedFilters});
if (activeSelectedFilters.length > 0) {
    activeSelectedFilters.map((filter) => {
        console.log(filter)
    })
    //usersNeeded = query(usersCollection, where(usersNeeded, 'selectedField', 'in', activeSelectedFilters.map(filter => filter.value))) 
}
*/

        getDocs(usersNeeded)
        .then(res => setUsers(
            res.docs.map(
                user => ({
                    ...user.data()
                })
            )
        )) 
        setLoader(false);
    }, [ locationsFilter, selectedFilters, firebase ])

    //console.log({users})

    return (
        <div className='catalogo_container'>
            {loader ? (
                <Loader />
            ) : (
                <ListUsers users={users} />
            )}
        </div>
    )
}
export default Catalogo