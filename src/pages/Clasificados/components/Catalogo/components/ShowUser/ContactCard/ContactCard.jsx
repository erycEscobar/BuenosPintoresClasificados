import './ContactCard.scss';
import LocationIcon from '../../../../../../../assets/photos/locationIcon.png';
import EmailIcon from '../../../../../../../assets/photos/emailIcon.png';
import PhoneIcon from '../../../../../../../assets/photos/phoneIcon.png';
import PropTypes from 'prop-types';

const ContactCard = ({userInfo}) => {

    return (
        <div className='infoUserCard'>
            <div className='line01'>
                <img src={userInfo.userAvatar} alt="" />
                <div className='line01_colum02'>
                    <p>{userInfo.name} {userInfo.surName}</p>
                    <div>
                        <p>Servicios</p>
                        <ul>
                            {userInfo.pinturaDeMadera && <li>Pintura de Madera</li>}
                            {userInfo.trabajosEnAltura && <li>Trabajos en Altura</li>}
                            {userInfo.durlock && <li>Durlock</li>}
                            {userInfo.exteriores &&<li>Exteriores</li>}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='line02'>
                <div>
                    <ul>
                        <li>
                            <img src={EmailIcon} alt="" />
                            <p>{userInfo.email}</p>
                        </li>
                        <li>
                            <img src={PhoneIcon} alt="" />
                            <p>{userInfo.phoneNumber}</p>
                        </li>
                        <li>
                            <img src={LocationIcon} alt="" />
                            <p>{userInfo.location}</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='line03'>
                <div className='description_container'>
                    <p>Lorem ipsum, dolor sit amet. Laudantium voluptate 
                    officiis at cumque consequatur, labore corrupti, 
                    perferendis optio voluptatum, temporibus maxime adipisci!
                    distinctio eos velit excepturi molestias fuga nemo.</p>
                </div>
            </div>

        </div>
    )
}

ContactCard.propTypes = {
    userInfo: PropTypes.object.isRequired,
}


export default ContactCard