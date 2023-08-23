import { uploadFile } from '../../firebase/config';
import profileIcon from '../../assets/photos/profileIcon.png' 
import './UploadFileButton.scss';
import { UserAuth } from '../../userContext/userContext';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';

const UploadFileButton = () => {     

    const { userLogged } = UserAuth();

    const updateUserImage = async (url) => {
        try {
            const firestore = getFirestore();
            const userToEdit = doc(firestore, `Users/${userLogged.uid}`);
            await updateDoc(userToEdit, {
                userAvatar: url,
            })
        } catch (error) {
            console.log(error)
        }
    };

    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0];
    
        if (selectedFile) {
          // Verificar el tipo del archivo
            if (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/png') {
                try {
                    const urlImage = await uploadFile(selectedFile);
                    updateUserImage(urlImage);
                    console.log(urlImage);
                } catch (error) {
                    console.log(error);
                }
        } else {
            alert('Por favor, selecciona una imagen en formato JPEG o PNG.');
        }}
    };
    
    return (
            <div className="file-upload-container">
                <label htmlFor="fileInput" className="custom-file-upload">
                    <img src={profileIcon} alt="Subir imagen" />
                    <input
                    id="fileInput"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleFileChange}
                    />
                </label>
                {/*file && <img src={URL.createObjectURL(file)} alt="Imagen subida" />*/}
            </div>
    );

}
export default UploadFileButton