import './MobileNavBar.scss';
import burguerMenuIcon from '../../../../assets/photos/burguerMenuIcon.png'

const MobileNavBar = ({show, setShow}) => {

    const showOptions = () => {
        setShow(!show);
    }

    return (
        <div className='MobileNavBar' onClick={showOptions}>
            <img src={burguerMenuIcon} alt="" />
        </div>
    )

}
export default MobileNavBar