import { Link } from "react-router-dom";

const ColorList = ({colors}) => {
    return (
        <div>
            <h2>Add a Color</h2>
            <Link to="new">Add New Color</Link>

            <h2>Color List</h2>
            {Object.keys(colors).map(color => (<Link to={color} key={color}>{color}</Link>))}
        </div>
    )
}

export default ColorList;