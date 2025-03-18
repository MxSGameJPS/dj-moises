import { BrowserRouter, Route, Routes } from "react-router"
import EstilosGlobais from "./EstilosGlobais"
import Abertura from "./Components/Abertura"
import Header from './Components/Header/index';
import Home from "./Components/Pages/Home";

function App() {
 

  return (
    <BrowserRouter>
    <EstilosGlobais />
    <Routes>
      <Route path="/" element={<Abertura />} />
      <Route path="/home" element={<><Header /><Home /></>} />
    </Routes>      
    </BrowserRouter>
  )
}

export default App
