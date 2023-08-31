import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import ListProyects from "./components/ListProyects/ListProyects";
//import ListProyects from "./components/ListProyects/ListProyects";

const UploadedProyects = ({userId}) => {

    const [ proyects, setProyects ] = useState([]);

    useEffect( () => {
        const firebase = getFirestore();
        const proyectsRef = collection(firebase, `Users/${userId}/MisTrabajos`);
        getDocs(proyectsRef)
        .then(res => setProyects(
            res.docs.map(
                proyecto => ({
                    id: proyecto.id,
                    data: proyecto.data(),
                })
            )
        ))
    }, [userId])
    
    //console.log(proyects);

    return (
        <ListProyects userProyects={proyects} />
    )
}

UploadedProyects.propTypes = {
    userId: PropTypes.string.isRequired,
}

export default UploadedProyects