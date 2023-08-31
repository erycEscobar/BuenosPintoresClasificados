import phoneIcon from '../../../../assets/photos/phoneIcon.png';
import emailIcon from '../../../../assets/photos/emailIcon.png';
import locationIcon from '../../../../assets/photos/locationIcon.png'
import UploadFileButton from '../../../../components/UploadFileButton/UploadFileButton';
import profileIcon from '../../../../assets/photos/profileIcon.png'

import PropTypes from 'prop-types';

const UserData = ({userInfo}) => {

    return (
        <section className='userData_container'>
                    <div className='userAvatar'>
                        <ul>
                            <li>
                                {userInfo.userAvatar === '' ? (
                                    <UploadFileButton profilePhoto={profileIcon} />
                                ):(
                                    <UploadFileButton profilePhoto={userInfo.userAvatar} />
                                )}
                            </li>
                            <li>
                                {userInfo.name} {userInfo.surName}
                            </li>
                        </ul>
                    </div>
                    <div className='userData'>
                        <ul>
                            <li>
                                <img src={phoneIcon} alt="" />
                                {userInfo.phoneNumber}
                            </li>
                            <li>
                                <img src={emailIcon} alt="" />
                                {userInfo.email}
                            </li>
                            <li>
                                <img src={locationIcon} alt="" />
                                {userInfo.location}
                            </li>
                            <li>
                                <span></span>
                            </li>
                            <li>
                                <ul>
                                    <li>
                                        Servicios Ofrecidos :
                                    </li>
                                    {userInfo.durlock && <li>- Durlock</li>}
                                    {userInfo.exteriores && <li>- Exteriores</li>}
                                    {userInfo.pinturaDeMadera && <li>- Pintura De Madera</li>}
                                    {userInfo.trabajosEnAltura && <li>- Trabajos En Altura</li>}
                                </ul>
                            </li>
                            <li>
                                <span></span>
                            </li>
                            <li>
                                Trabajos Realizados: {userInfo.trabajosRealizados}
                            </li>
                            <li>
                                Precio/M2: ${userInfo.precio}
                            </li>
                            <li>
                                <span></span>
                            </li>
                            <li>
                                Plan Contratado :
                            </li>
                        </ul>
                    </div>
                </section>      
    )
};

UserData.propTypes = {
    userInfo: PropTypes.object.isRequired,
}

export default UserData