import UserCard from "../UserCard/UserCard"


const ListUsers = ({users=[]}) => {
    
    return (
        users.map( listUser => <UserCard key={listUser.id} userData={listUser} /> )
    )

}
export default ListUsers