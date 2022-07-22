import {useState} from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({addColor}) => {
    const initial_state = {
        name: "",
        hex: "#000000"
    }
    
    const [formData, setFormData] = useState(initial_state);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({[formData.name]: formData.hex})
        navigate('/colors')
    }

    return (
        <div>
            <h2>Add a New Color</h2>

            <form onSubmit = {handleSubmit}>
                <label htmlFor="name">Color Name</label>
                <input 
                    type="name"
                    id="name"
                    name="name"
                    value = {formData.name}
                    onChange = {handleChange}
                />
                <label htmlFor="hex">Color Hex</label>
                <input 
                    type="color"
                    id="hex"
                    name="hex"
                    value = {formData.hex}
                    onChange = {handleChange}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewColorForm;