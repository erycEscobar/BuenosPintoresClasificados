import './UserCard.scss';
import { useFilterContext } from '../../../../filterContext/filterContext';
import userIcon from '../../../../../../assets/photos/userIcon.png';
import check from '../../../../../../assets/photos/check.png';
import locationIcon from '../../../../../../assets/photos/locationIcon.png';

import PropTypes from 'prop-types';

const UserCard = ({key, userData}) => {

    const { userToShow, setUserToShow } = useFilterContext();

    const handleShowMoreData = () => {
        setUserToShow(userData)
    }

    return (
        <div className="userCard_container">
            <div className='userCard_column01'>
                <ul>
                    <li>
                        {userData.userAvatar === '' ? (
                            <img src={userIcon} alt="" />
                        ):(
                            <img src={userData.userAvatar} alt="" />
                        )}
                    </li>
                </ul>
            </div>
            <div className='userCard_column02'>
                <ul>
                    <li>
                        {userData.name} {userData.surName}
                        <img className={userData.verificado ? 'verification' : 'noVerification'} src={check} alt=""/>
                    </li>
                    <li>
                        ${userData.precio}/M2
                    </li>
                    <li>
                        <img src={locationIcon} alt="" /> {userData.location}
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

UserCard.propTypes = {
    key: PropTypes.number.isRequired,
    userData: PropTypes.object.isRequired
}


export default UserCard