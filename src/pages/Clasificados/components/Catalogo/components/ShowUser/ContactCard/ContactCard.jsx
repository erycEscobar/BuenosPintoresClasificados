import './ContactCard.scss';
import LocationIcon from '../../../../../../../assets/photos/locationIcon.png';
import EmailIcon from '../../../../../../../assets/photos/emailIcon.png';
import PhoneIcon from '../../../../../../../assets/photos/phoneIcon.png';
import PropTypes from 'prop-types';
import UploadedProyects from '../../../../../../UserProfile/components/UserProyects/components/UploadedProyects/UploadedProyects';

const ContactCard = ({userInfo, userId}) => {

    return (
        <div className='contactCard_container'>
            <div className='contactCard_hero' >
                <img src={userInfo.userAvatar} alt="" />
                <div className='contactCard_userData'>
                    <p className='contactCard_userName'>
                        {userInfo.name} {userInfo.surName}
                    </p>
                    

                </div>
            </div>
            <div className='contactCard_proyects'>
                <UploadedProyects userId={userId} />
            </div>
           
        </div>
    )
}

ContactCard.propTypes = {
    userId: PropTypes.string.isRequired,
    userInfo: PropTypes.object.isRequired,
}


export default ContactCard