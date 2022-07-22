import {Link} from "react-router-dom"

const Color = ({name, hex}) => {
    return (
        <div>
            <h1
            style= {{
                color: hex
            }}
            >
                {name}
            </h1>
            <Link to="/colors">Go Back</Link>
        </div>
    )
}

export default Color;