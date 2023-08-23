import UserCard from "../UserCard/UserCard"


const ListUsers = ({users}) => {
    
    return (
        users.map( listUser =>  <UserCard key={listUser.id} userId={listUser.id} userData={listUser.data} /> )
    )

}
export default ListUsers