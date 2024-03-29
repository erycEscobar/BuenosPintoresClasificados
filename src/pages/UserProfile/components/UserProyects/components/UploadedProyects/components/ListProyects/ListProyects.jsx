import ProyectCard from "../ProyectCard/ProyectCard"

const ListProyects = ({userProyects}) => {
    
    return (
        userProyects.map (
            proyect => 
            <ProyectCard 
                key={proyect.id}
                id={proyect.id}
                proyect={proyect.data} 
            />
        )
    )

}
export default ListProyects