import { useParams, Navigate } from "react-router-dom";
import Color from "./Color";

const ColorFilter = ({colors}) => {
    const {color} = useParams();

    if (Object.keys(colors).includes(color)) {
        return <Color name={color} hex={colors[color]}/>
    }
    
    return <Navigate to="/colors" />
}

export default ColorFilter;