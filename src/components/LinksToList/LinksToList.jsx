import { Link } from "react-router-dom"

const LinksToList = ({optionsList}) => {
    return (
        <ul>
            {
                optionsList.map((option, index) =>{
                    return (
                        <li key={index}>
                            <Link to={option.link}>
                                {option.label}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default LinksToList