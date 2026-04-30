import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Carrier from "./pages/Carrier";

const App = () => {
  return (
    <>   
        <Routes> 
        <Route path="/" element={<Home />} /> 
       </Routes> 
     </>
  )
}

export default App