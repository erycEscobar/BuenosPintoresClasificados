import { useState } from 'react';
import StepCounter from './components/StepCounter/StepCounter';
import SignUpForm from './components/SignUpForm/SignUpForm';
import StepButtons from './components/StepButtons/StepButtons';
import './SignUp.scss';

const SignUp = () => {

    const [ stepNumber, setStepNumber ] = useState(1);
    const StepIncrement = () => {setStepNumber(stepNumber + 1);}
    const StepDecrement = () => {setStepNumber(stepNumber - 1);}  

    return (
        <div className='main_container'>
            <div className='stepCounter_container'>
                <StepCounter step={stepNumber} />
            </div>
            <div className='form_container'>
                <SignUpForm actualStep={stepNumber} />
            </div>
            <div className='buttons_container'>
                <StepButtons actualStep={stepNumber} handleIncrement={StepIncrement} handleDecrement={StepDecrement} />
            </div>
        </div>
    )

}
export default SignUp