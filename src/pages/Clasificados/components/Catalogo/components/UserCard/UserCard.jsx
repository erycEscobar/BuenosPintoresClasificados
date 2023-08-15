import { useState } from 'react';
import './UserCard.scss';
import { useFilterContext } from '../../../../filterContext/filterContext';

const UserCard = ({key, userData}) => {

    const { userToShow, setUserToShow } = useFilterContext();

    const handleShowMoreData = () => {
        setUserToShow(userData)
    }

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
                        <button onClick={handleShowMoreData}>
                            CONTACTAR
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default UserCard