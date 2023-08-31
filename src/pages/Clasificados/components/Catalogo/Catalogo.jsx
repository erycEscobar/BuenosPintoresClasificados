import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import './Catalogo.scss';
import { useEffect, useState } from 'react';
import Loader from '../../../../components/Loader/Loader';
import ListUsers from './components/ListUsers/ListUsers';
import { useFilterContext } from '../../filterContext/filterContext';
import ShowUser from './components/ShowUser/ShowUser';

const Catalogo = () => {

    const { locationsFilter, filterByPrice, userToShow, filterWorkTypes } = useFilterContext();
    const [ users, setUsers ] = useState([]);
    const [ loader, setLoader ] = useState(true);
    const firebase = getFirestore();

    useEffect(() => {
        const usersCollection = collection(firebase, `Users`);
        let usersNeeded = query(usersCollection);
        
        if (locationsFilter && locationsFilter.length > 0) {
            //locationsFilter.map(filter => console.log(filter));
            usersNeeded = query(usersCollection, where('location', 'in', locationsFilter.map(filter => filter)));
        }

        if (filterByPrice.min !== '' ) {
            usersNeeded = query(usersCollection, where('precio', '>=', filterByPrice.min));
        }

        if (filterByPrice.max !== '' ) {
            usersNeeded = query(usersCollection, where('precio', '<=', filterByPrice.max));
        }

        filterWorkTypes.map((workType) => {
            if (workType.isChecked) {
                usersNeeded = query(usersCollection, where(`${workType.value}`, '==', true));
            }
        })

        getDocs(usersNeeded)
        .then(res => setUsers(
            res.docs.map(
                user => ({ 
                    id: user.id, 
                    data: user.data(),
                })
            )
        )) 
        setLoader(false);
    }, [ locationsFilter, filterByPrice, firebase, filterWorkTypes ])

    return (
        <div className='catalogo_container'>
            {loader ? (
                <Loader />
            ) : (
                userToShow !== null ? (
                    <ShowUser />
                ):(                    
                    <ListUsers users={users} />
                )
            )}
        </div>
    )
}
export default Catalogo