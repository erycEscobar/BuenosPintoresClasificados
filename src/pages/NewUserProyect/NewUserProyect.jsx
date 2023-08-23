import './NewUserProyect.scss';
import { useState } from 'react';

const NewUserProyect = () => {
    
    const [workData, setWorkData] = useState({
        workName: '',
        types: {
          durlock: false,
          exteriores: false,
          pinturaEnMadera: false,
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
          setWorkData((prevData) => ({
            ...prevData,
            images: [...prevData.images, ...files],
          }));
        } else {
          setWorkData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes hacer algo con los datos del trabajo
        console.log(workData);
    };

    console.log({workData});
    
    return (
        <div className='newUserProyect_container'>
          <form onSubmit={handleSubmit}>

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
                    {/* Repite para los otros tipos */}
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

            <label className='newUserProyect_label'>
                <p>Imágenes (hasta 10):</p>
                <input
                    type="file"
                    name="images"
                    multiple
                    accept=".jpg, .jpeg, .png"
                    onChange={handleInputChange}
                />
            </label>

            <button type="submit">GUARDAR</button>

          </form>
        </div>
    );
}

export default NewUserProyect