import { BrowserRouter, Route, Routes } from "react-router"
import EstilosGlobais from "./EstilosGlobais"
import Abertura from "./Components/Abertura"

function App() {
 

  return (
    <BrowserRouter>
    <EstilosGlobais />
    <Routes>
      <Route path="/" element={<Abertura />} />
    </Routes>      
    </BrowserRouter>
  )
}

export default App
