import UserCard from "../UserCard/UserCard"


const ListUsers = ({users=[], showDataUser}) => {
    
    return (
        users.map( listUser => <UserCard key={listUser.id} userData={listUser} handle={showDataUser} /> )
    )

}
export default ListUsers