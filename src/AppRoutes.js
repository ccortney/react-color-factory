import {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ColorFilter from "./ColorFilter";
import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";

const AppRoutes = () => {
    const initial_state = JSON.parse(localStorage.getItem("colors")) ||{red: "#FF0000", green: "#00FF00",blue: "#0000FF"};

    const [colors, setColors] = useState(initial_state);

    const addColor = (newColor) => {
        setColors(colors => ({...colors, ...newColor}))
    }

    useEffect(() => localStorage.setItem("colors", JSON.stringify(colors)), [colors])

    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/colors" element={<ColorList colors={colors}/>}/>
                <Route path="/colors/new" element={<NewColorForm addColor={addColor}/>}/>
                <Route path="/colors/:color" element={<ColorFilter colors = {colors}/>}/>
                <Route path="*" element={<Navigate to="/colors" />}/>

            </Routes>
        // </BrowserRouter>
    )
}


export default AppRoutes;
