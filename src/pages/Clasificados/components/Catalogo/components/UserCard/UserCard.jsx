import './UserCard.scss';
import { useFilterContext } from '../../../../filterContext/filterContext';
import userIcon from '../../../../../../assets/photos/userIcon.png';
import check from '../../../../../../assets/photos/check.png';

import PropTypes from 'prop-types';

const UserCard = ({userId, userData}) => {

    //console.log({userData, userId});

    const { setUserToShow } = useFilterContext();

    const handleShowMoreData = () => {
        setUserToShow({
            id: userId,    
            data: userData,
        })
    }

    return (
        <div className="userCard_container">
            <div className='userCard_avatar'>
                {userData.userAvatar === '' ? (
                    <img src={userIcon} alt="" />
                ):(
                    <img src={userData.userAvatar} alt="" />
            )}
            </div>
            <ul>
                <li>
                    {userData.name} {userData.surName}
                    <img className={userData.verificado ? 'verification' : 'noVerification'} src={check} alt=""/>
                </li>
                <li>
                    <button onClick={handleShowMoreData}>
                        CONTACTAR
                    </button>
                </li>
            </ul>
        </div>
    )
}

UserCard.propTypes = {
    userId: PropTypes.string.isRequired,
    userData: PropTypes.object.isRequired
}


export default UserCard