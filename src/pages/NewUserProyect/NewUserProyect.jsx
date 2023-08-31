import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import './NewUserProyect.scss';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import { firebaseStorage } from '../../firebase/config';
import { v4 } from 'uuid';
import { addDoc, collection, doc, getFirestore, increment, updateDoc } from 'firebase/firestore';
import { UserAuth } from '../../userContext/userContext';
import { useNavigate } from 'react-router-dom';

const NewUserProyect = () => {

    const navigate = useNavigate();
    const { userLogged } = UserAuth();
    const [ proyectSaved, setProyectSaved ] = useState(false);
    const [ imgToUpload, setImgToUpload ] = useState([]);
    const [ workData, setWorkData ] = useState({
        workName: '',
        types: {
          durlock: false,
          exteriores: false,
          pinturaDeMadera: false,
          trabajosEnAltura: false,
        },
        description: '',
        images: [],
    });
    
    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
    
        if (type === 'checkbox') {
          setWorkData((prevData) => ({
            ...prevData,
            types: {
              ...prevData.types,
              [name]: checked,
            },
          }));
        } else if (type === 'file') {
            if (files.length <= 10) {
                setImgToUpload([...imgToUpload, ...files])
            }
        } else {
          setWorkData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
    };

    async function uploadImage(image) {
        const storageRef = ref(firebaseStorage, `${userLogged.uid}/${v4()}`);
        try {
            await uploadBytes(storageRef, image);
            const url = await getDownloadURL(storageRef);
            return url;
        } catch (error) {
            console.error("Error al cargar la imagen:", error);
            throw error;
        }
    }

    const dataVerification = () => {
        if ((
            (workData.workName || workData.description) === ''
            ) || (
            imgToUpload.length === 0
            ) || ((
            workData.types[0]
            || workData.types[1]
            || workData.types[2]
            || workData.types[3]
            ) === false )){
                return false
            } else {
                return true
            }
    }
    
    async function sendToFirebase(images) {
        const firestore = getFirestore();
        const docuRef = collection(firestore, `Users/${userLogged.uid}/MisTrabajos`);
        const userRef = doc(firestore, `Users/${userLogged.uid}`);
        try {
            await addDoc(docuRef, {...workData, images });
            await updateDoc(userRef, { trabajosRealizados: increment(1) });
        } catch (error) {
            alert(error);
        }
    }

    const handleGuardar = async () => {
        const Verification = dataVerification();
        if (Verification) {
            try {
                const uploadedImageUrls = await Promise.all(
                    imgToUpload.map(async (img) => {
                        const imgUrl = await uploadImage(img);
                        return imgUrl;
                    })
                );
    
                const images = [...workData.images, ...uploadedImageUrls];
                console.log(images);
                setWorkData((prevData) => ({
                    ...prevData,
                    images: images
                }));
                //console.log({ workData });
                await sendToFirebase(images);
                //console.log("Trabajo guardado en Firebase");
                setProyectSaved(true);
            } catch (error) {
                alert("Error:", error);
            }
        } else {
            alert('Todos los campos deben ser completados');
        }
    };

    const handleVolver = () => {
        navigate('/UserProfile')
    }

    //console.log({workData, imgToUpload});
    
    return (
        <div className='newUserProyect_container'>
            {proyectSaved ? (
                <Modal msg='Trabajo guardado' link='/UserProfile' />
            ):(
                <>
            <form>
                <div className='newUserProyect_column01'>

                    <label className='newUserProyect_label'>
                        <p>Ingrese nombre del trabajo:</p>
                        <input className='normalInput'
                            type="text"
                            name="workName"
                            value={workData.workName}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label className='newUserProyect_label'>
                        <p>Seleccione el/los tipo/s de trabajo/s:</p>
                        <div className='newUserProyect_types'>
                            <label>
                                <input className='checkboxesInputs'
                                    type="checkbox"
                                    name="durlock"
                                    checked={workData.types.durlock}
                                    onChange={handleInputChange}
                                />
                                Durlock
                            </label>
                            <label>
                                <input className='checkboxesInputs'
                                    type="checkbox"
                                    name="pinturaDeMadera"
                                    checked={workData.types.pinturaDeMadera}
                                    onChange={handleInputChange}
                                />
                                Pintura de madera
                            </label>
                            <label>
                                <input className='checkboxesInputs'
                                    type="checkbox"
                                    name="trabajosEnAltura"
                                    checked={workData.types.trabajosEnAltura}
                                    onChange={handleInputChange}
                                />
                                Trabajos en altura
                            </label>
                            <label>
                                <input className='checkboxesInputs'
                                    type="checkbox"
                                    name="exteriores"
                                    checked={workData.types.exteriores}
                                    onChange={handleInputChange}
                                />
                                Exteriores
                            </label>
                        </div>
                    </label>

                    <label className='newUserProyect_label'>
                        <p>Redacte una pequeña descripción del trabajo:</p>
                        <textarea
                            name="description"
                            value={workData.description}
                            onChange={handleInputChange}
                        />
                    </label>

                </div>

                <div className='newUserProyect_column02'>

                    <label className='newUserProyect_label'>
                        <p>Imágenes (hasta 10):</p>
                        <input
                            type="file"
                            name="images"
                            multiple accept=".jpg, .jpeg, .png"
                            onChange={handleInputChange}
                        />
                    </label>
                        <ul className='newUserProyect_photoGallery'>
                            {imgToUpload.length > 0 && imgToUpload.map((image, index) => {
                                return (
                                    <li key={index}>
                                        <img src={URL.createObjectURL(image)} alt=""/>
                                    </li>
                                )
                            })}
                        </ul>
                    
                </div>

            </form>
            <div className='buttons_container'>
                <button onClick={handleGuardar}>GUARDAR</button>
                <button onClick={handleVolver}>VOLVER</button>
            </div>
                </>
            )}
        </div>
    );
}

export default NewUserProyect