import './GenerateForm.scss';
import PropTypes from 'prop-types';

const GenerateForm = ({inputsList, handleChange, buttonName, handleSubmit, actualValues, submitButton}) => {

    return (
        <form onSubmit={handleSubmit}>
            {inputsList.map((input) => {
                return (
                    <input 
                        key={input.id}
                        name={input.name}
                        placeholder={input.placeholder}
                        type={input.type}
                        autoComplete={input.autoComplete}
                        onChange={handleChange}
                        value={actualValues[input.name]}
                    />
                )
            })}
            {submitButton &&
                <button type='submit'>
                    {buttonName}
                </button>
            }
        </form>
    )
}

GenerateForm.propTypes = {
    inputsList: PropTypes.array.isRequired, 
    handleChange: PropTypes.func.isRequired, 
    buttonName: PropTypes.string.isRequired, 
    handleSubmit: PropTypes.func.isRequired, 
    actualValues: PropTypes.object.isRequired, 
    submitButton: PropTypes.bool.isRequired, 
};

export default GenerateForm