import './StepCounter.scss'
import PropTypes from 'prop-types';

const StepCounter = ({step}) => {

    return (
        <div className='stepCounter'>
            <span className={step >= 1 ? 'step active' : 'step'}>1</span>
            <span className='space'></span>
            <span className={step >= 2 ? 'step active' : 'step'}>2</span>
            <span className='space'></span>
            <span className={step === 3 ? 'step active' : 'step'}>3</span>
        </div>
    )

}

StepCounter.propTypes = {
    step: PropTypes.number.isRequired,
}

export default StepCounter