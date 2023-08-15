import Modal from '../../../components/Modal/Modal';
import { UserAuth } from '../../../userContext/userContext';
import './SignOut.scss';

const SignOut = () => {

    const { logOut } = UserAuth();

    logOut();

    return (
        <Modal msg='Sesion Finalizada' link='/' />
    )
}
export default SignOut