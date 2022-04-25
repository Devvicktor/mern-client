import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import PetDetail from "./components/PetDetail";
import PetUpdate from "./components/PetUpdate";
import PetForm from "./components/PetForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/pets/new' element={<PetForm />} />
          <Route path='/pet/:id' element={<PetDetail />} />
          <Route path='/pet/update/:id' element={<PetUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
