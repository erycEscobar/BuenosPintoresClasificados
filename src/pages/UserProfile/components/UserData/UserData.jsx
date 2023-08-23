import phoneIcon from '../../../../assets/photos/phoneIcon.png';
import emailIcon from '../../../../assets/photos/emailIcon.png';
import starIcon from '../../../../assets/photos/starIcon.png';
import UploadFileButton from '../../../../components/UploadFileButton/UploadFileButton';

import PropTypes from 'prop-types';

const UserData = ({userInfo}) => {

    return (
        <section className='userData_container'>
                    <div className='userAvatar'>
                        {userInfo.userAvatar === '' ? (
                            <UploadFileButton />
                        ):(
                            <img src={userInfo.userAvatar} alt="" />
                        )}
                    </div>
                    <div className='userData'>
                        <div className='firstLine'>
                            <ul>
                                <li>
                                    {userInfo.name} {userInfo.surName}
                                </li>
                                <li>
                                    <img src={starIcon} alt="" />
                                    <img src={starIcon} alt="" />
                                    <img src={starIcon} alt="" />
                                    <img src={starIcon} alt="" />
                                    <img src={starIcon} alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className='secondLine'>
                            <ul>
                                <li>
                                    <img src={phoneIcon} alt="" />
                                    {userInfo.phoneNumber}
                                </li>
                                <li>
                                    <img src={emailIcon} alt="" />
                                    {userInfo.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>      
    )
};

UserData.propTypes = {
    userInfo: PropTypes.object.isRequired,
}

export default UserData