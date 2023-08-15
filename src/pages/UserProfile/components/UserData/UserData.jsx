
import { UserTest } from '../../UserTest';

import phoneIcon from '../../../../assets/photos/phoneIcon.png';
import emailIcon from '../../../../assets/photos/emailIcon.png';
import starIcon from '../../../../assets/photos/starIcon.png';


const UserData = ({userInfo}) => {

    return (

        <section className='userData_container'>
                    <div className='userAvatar'>
                        <img src={UserTest.userAvatar} alt="" />
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
                                    {UserTest.phoneNumber}
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
}
export default UserData