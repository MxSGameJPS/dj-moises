import { BrowserRouter, Route, Routes } from "react-router"
import EstilosGlobais from "./EstilosGlobais"
import Abertura from "./Components/Abertura"
import Home from "./Pages/Home"
import Header from "./Components/Header"
import Festas from "./Pages/Festas"


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
