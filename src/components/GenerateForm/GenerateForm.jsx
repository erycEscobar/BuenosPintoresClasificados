import './GenerateForm.scss';

const GenerateForm = ({inputsList, handleChnage, buttonName, handleSubmit}) => {

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
                        onChange={handleChnage}
                    />
                )
            })}
            <button type='submit'>
                {buttonName}
            </button>
        </form>
    )

}
export default GenerateForm