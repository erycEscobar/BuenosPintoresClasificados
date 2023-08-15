import { useState } from 'react';
import GenerateForm from '../../../components/GenerateForm/GenerateForm';
import { SignUpInputsList } from './SignUpInputsList';
import './SignUp.scss';
import { UserAuth } from '../../../userContext/userContext';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import Loader from '../../../components/Loader/Loader';
import Modal from '../../../components/Modal/Modal';

const SignUp = () => {

    const { createUser } = UserAuth();
    const [ loader, setLoader ] = useState(false);
    const [ userCreated, setUserCreated ] = useState(false);
    const [ signUpForm, setSignUpForm ] = useState({
        verificado: false,
        plan1: false,
        plan2: false,
        plan3: false,
        name: '',
        surName: '',
        email: '',
        password: '',
        precio: 0,
        localidad: '',
        phoneNumber: 0,
    });

    const onChange = (e) => {
        setSignUpForm({
            ...signUpForm,
            [e.target.name]: e.target.value
        })
    };

    const Submit = async (e) => {
        e.preventDefault();
        setLoader(true);
        try {
            const infoUser = await createUser(signUpForm.email, signUpForm.password).then((firebaseData) => {
                return firebaseData;
            });
            const firestore = getFirestore();
            const docuRef = doc(firestore, `Users/${infoUser.user.uid}`);
            setDoc(docuRef, {...signUpForm, uid:infoUser.user.uid});
            setUserCreated(true);
        } catch (e) {
            console.log(e);
        }
        setLoader(false);

    };

    return (
        <div className='singUp_container'>
            { loader ? (
                <Loader />
            ):( userCreated ? (
                <Modal msg='Usuario creado con exito' link='/UserProfile' />
            ) : (
                <div className='signUp'>
                    <GenerateForm 
                        inputsList={SignUpInputsList} 
                        handleChnage={onChange} 
                        buttonName='Registrarse'
                        handleSubmit={Submit}
                    />
                </div>
            ))}
        </div>
    )
}
export default SignUp