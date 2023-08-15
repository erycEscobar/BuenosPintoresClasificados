import './UserCard.scss';

const UserCard = ({key, userData}) => {

    return (
        <div className="userCard_container">
            <div className='userCard_column01'>
                <img src="" alt="" />
            </div>
            <div className='userCard_column02'>
                <ul>
                    <li>
                        {userData.name} {userData.surName}
                    </li>
                    <li>
                        ${userData.precio}/M2
                    </li>
                    <li>
                        Localización: {userData.localidad}
                    </li>
                </ul>

            </div>
            <div className='userCard_column03'>
                <ul>
                    <li>
                        Verificacion
                    </li>
                    <li>
                        <button>
                            CONTACTAR
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default UserCard