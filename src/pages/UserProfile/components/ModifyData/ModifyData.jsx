import './ModifyData.scss';
import GenerateForm from "../../../../components/GenerateForm/GenerateForm";
import { ModifyInputsList } from "./ModifyInputsList";
import { useState } from 'react';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import { UserAuth } from '../../../../userContext/userContext';
import PropTypes from 'prop-types';

const ModifyData = ({handleBack}) => {

    const { userLogged } = UserAuth();
    const [ itemsToModify, setItemsToModify ] = useState({});

    const onChange = (e) => {
        setItemsToModify({
            ...itemsToModify,
            [e.target.name]: e.target.value
        })
    };
/*
*/
    const Submit = async (e) => {
        e.preventDefault();
        //console.log(itemsToModify);

        try {
            const firestore = getFirestore();
            const userToEdit = doc(firestore, `Users/${userLogged.uid}`);
            await updateDoc(userToEdit, {
                ...itemsToModify,
            });
        } catch (e) {
            alert(e);
        }
        handleBack();
    }

    
    return (
        <div className="modifyData_container">
            <div className="modifyData">

                <p className="modifyData_title">
                    Modificar mis datos
                </p>

                <GenerateForm 
                    inputsList={ModifyInputsList}
                    handleChange={onChange}
                    buttonName='Guardar Cambios'
                    handleSubmit={Submit}
                    actualValues={itemsToModify}
                    submitButton={true}
                />

                <button onClick={handleBack}>
                    VOLVER
                </button>
            </div>
        </div>
    )
};

ModifyData.propTypes = {
    handleBack: PropTypes.func.isRequired,

};

export default ModifyData