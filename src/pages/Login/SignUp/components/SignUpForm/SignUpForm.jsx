import { useState } from 'react';
import GenerateForm from '../../../../../components/GenerateForm/GenerateForm';
import './SignUpForm.scss';
import { UserAuth } from '../../../../../userContext/userContext';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import Loader from '../../../../../components/Loader/Loader';
import Modal from '../../../../../components/Modal/Modal';
import { PersonalInfo } from '../../PersonalInfo';
import ServiciosOfrecidos from './ServiciosOfrecidos/ServiciosOfrecidos';
import PropTypes from 'prop-types';

const SignUpForm = ({actualStep}) => {

    const { createUser } = UserAuth();
    const [ loader, setLoader ] = useState(false);
    const [ userCreated, setUserCreated ] = useState(false);

    const [ signUpForm, setSignUpForm ] = useState({
        name: '',
        surName: '',
        location: '',
        phoneNumber: '',
        email: '',
        password: '',
        userAvatar: '',

        precio: 0,
        pinturaDeMadera: false,
        trabajosEnAltura: false,
        durlock: false,
        exteriores: false,

        verificado: false,
        plan1: false,
        plan2: false,
        plan3: false,
    });

    const onChange = (e) => {
        setSignUpForm({
            ...signUpForm,
            [e.target.name]: e.target.value
        })
    };

    console.log({signUpForm});

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
                ):( actualStep === 1 ? (
                    <div className='signUp'>
                        <GenerateForm 
                            inputsList={PersonalInfo} 
                            handleChange={onChange} 
                            buttonName='Registrarse'
                            handleSubmit={Submit}
                            actualValues={signUpForm}
                            submitButton={false}
                        />
                    </div>
                ):( actualStep === 2 ? (
                    <div className='signUp'>
                        <p className='signUp_Instructions'>Seleccione los servicios que desea ofrecer</p>
                        <ServiciosOfrecidos userForm={signUpForm} setUserForm={setSignUpForm} />
                        <p className='signUp_Instructions'>Ingrese un monto aproximado como presupuesto en pesos</p>
                        <form action="">
                            <input 
                                type="number"
                                name='precio'
                                placeholder='Ingrese monto en ARS'
                                onChange={onChange} 
                            />
                        </form>
                    </div>
                ):( actualStep === 3 &&
                    <div className='signUp'>
                        <p className='signUp_Instructions'>Crear Cuenta</p>
                        <button onClick={Submit}>REGISTRARSE</button>
                    </div>
                ))))}
            </div>
    )
}

SignUpForm.propTypes = {
    actualStep: PropTypes.number.isRequired,
}

export default SignUpForm