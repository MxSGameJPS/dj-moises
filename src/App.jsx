import { BrowserRouter, Route, Routes } from "react-router-dom"
import EstilosGlobais from "./EstilosGlobais"
import Abertura from "./Components/Abertura"
import Header from './Components/Header/index';
import Home from "./Components/Pages/Home";
import Festas from "./Components/Pages/Festas";

function App() {
 

  return (
    <BrowserRouter>
    <EstilosGlobais />
    <Routes>
      <Route path="/" element={<Abertura />} />
      <Route path="/home" element={<><Header /><Home /></>} />
      <Route path="/festas" element={<><Header /><Festas /></>} />
    </Routes>      
    </BrowserRouter>
  )
}

export default App
