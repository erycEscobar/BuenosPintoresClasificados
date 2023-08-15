import './Modal.scss';
import { useNavigate } from "react-router-dom";

const Modal = ({msg, link}) => {

    const navigate = useNavigate();

    const handleButton = () => {
        navigate(`${link}`);
    }

    return (
        <div className='modal_container'>
            <p>
                {msg}
            </p>
            <button onClick={handleButton}>
                Continuar
            </button>
        </div>
    )
}
export default Modal