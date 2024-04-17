import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
    return(
        <>
        <BrowserRouter>
        <Routes >
            <Route path="/" element={<Signup/>} />
            <Route path="/Login" element={<Login/>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;