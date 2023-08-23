import './StepButtons.scss';

const StepButtons = ({actualStep, handleIncrement, handleDecrement}) => {

    return (
        <div className='buttons'>
            <button disabled={actualStep === 1} onClick={handleDecrement}>
                VOLVER
            </button>
            <button disabled={actualStep === 3} onClick={handleIncrement}>
                CONTINUAR
            </button>
        </div>
    )

}
export default StepButtons