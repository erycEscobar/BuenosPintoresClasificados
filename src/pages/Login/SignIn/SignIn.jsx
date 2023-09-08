import { useState } from 'react';
import { SignInInputsList } from './SignInInputsList';
import { UserAuth } from '../../../userContext/userContext';
import './SignIn.scss';
import GenerateForm from '../../../components/GenerateForm/GenerateForm';
import Modal from '../../../components/Modal/Modal';
import Loader from '../../../components/Loader/Loader';

const SignIn = () => {

    const [ signedIn, setSignedIn ] = useState(false);
    const { signIn } = UserAuth();
    const [ loader, setLoader ] = useState(false);
    const [ signInForm, setSignInForm ] = useState({
        email: '',
        password: '',
    });

    const onChange = (e) => {
        setSignInForm({
            ...signInForm,
            [e.target.name]: e.target.value
        })
    };

    const Submit = async (e) => {
        e.preventDefault();
        setLoader(true);
        try {
            await signIn(signInForm.email, signInForm.password);
            setSignedIn(true);
        } catch (e) {
            console.log(e);
        }
        setLoader(false);
    };

    return (
        <>
        {loader ? ( 
            <Loader />
        ):(
            signedIn ? (
                <Modal msg='Sesion Iniciada' link='/UserProfile'/>
            ) : (
                <div className='singIn_container'>
                    <div className='signIn'>
                        <GenerateForm 
                            inputsList={SignInInputsList} 
                            handleChange={onChange} 
                            buttonName='Iniciar Sesión'
                            handleSubmit={Submit}
                            actualValues={signInForm}
                            submitButton={true}
                        />
                    </div>
                </div>
            )
        )}
        </>
    )

}
export default SignIn