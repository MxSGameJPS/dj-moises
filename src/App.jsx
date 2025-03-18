import { BrowserRouter, Route, Routes } from "react-router-dom"
import EstilosGlobais from "./EstilosGlobais"
import Abertura from "./Components/Abertura"
import Header from './Components/Header';
import Home from "./Components/Pages/Home";
import Festas from "./Components/Pages/Festas.jsx";
import Footer from "./Components/Footer/index.jsx";

function App() {
 

  return (
    <BrowserRouter>
    <EstilosGlobais />
    <Routes>
      <Route path="/" element={<Abertura />} />
      <Route path="/home" element={<><Header /><Home /><Footer /></>} />";
      <Route path="/festas" element={<><Header /><Festas /><Footer /></>} />
    </Routes>      
    </BrowserRouter>
  )
}

export default App
