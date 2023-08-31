import './ContactCard.scss';
import LocationIcon from '../../../../../../../../assets/photos/locationIcon.png';
import EmailIcon from '../../../../../../../../assets/photos/emailIcon.png';
import PhoneIcon from '../../../../../../../../assets/photos/phoneIcon.png';
import PriceIcon from '../../../../../../../../assets/photos/priceIcon.png';
import PropTypes from 'prop-types';
import UploadedProyects from '../../../../../../../UserProfile/components/UserProyects/components/UploadedProyects/UploadedProyects';

import ShowProyect from '../ShowProyect/ShowProyect';
import { useFilterContext } from '../../../../../../filterContext/filterContext';

const ContactCard = ({userInfo, userId}) => {

    const { selectedProyect, proyectToShow } = useFilterContext();
    //console.log(userInfo)

    return (
        <div className='contactCard_container'>
            {selectedProyect ? (
                <div className='contactCard_hero' >
                    <img className='contactCard_heroBackground' src={userInfo.userAvatar} alt="" />
                    <ShowProyect proyect={proyectToShow}/>
                </div>
            ):(
                <div className='contactCard_hero' >
                    <img className='contactCard_heroBackground' src={userInfo.userAvatar} alt="" />
                    <div className='contactCard_userData'>
                        <p className='contactCard_userName'>
                            {userInfo.name} {userInfo.surName}
                        </p>
                        <p className='contactCard_services'>
                            Servicios
                        </p>
                        <ul className='contactCard_servicesList'>
                            {userInfo.exteriores && <li>Exteriores</li>} 
                            {userInfo.durlock && <li>Durlock</li>} 
                            {userInfo.trabajosEnAltura && <li>Trabajos En Altura</li>} 
                            {userInfo.pinturaDeMadera && <li>Pintura De Madera</li>} 
                        </ul>
                        <ul className='contactCard_contactData'>
                            <li><img src={PhoneIcon} alt=""/> {userInfo.phoneNumber} </li>
                            <li><img src={EmailIcon} alt=""/> {userInfo.email} </li>
                            <li><img src={LocationIcon} alt=""/> {userInfo.location} </li>
                            <li><img src={PriceIcon} alt="" width='25px' />{userInfo.precio}</li>
                        </ul>
                    </div>
                </div>
            )}    
            <div className='contactCard_proyects'>
                <div className='scrolling-wrapper'>
                    <UploadedProyects userId={userId}/>
                </div>
            </div>
        </div>
    )
}

ContactCard.propTypes = {
    userId: PropTypes.string.isRequired,
    userInfo: PropTypes.object.isRequired,
}

export default ContactCard