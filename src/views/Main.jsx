//add PetForm and PetList to Main.jsx
import React, { useState } from "react";
import PetForm from "../components/PetForm";
import PetList from "../components/PetList";

const Main = () => {
  const [pets, setPets] = useState([]);
  return (
    <div className='container'>
      <PetList pets={pets} setPets={setPets} />
    </div>
  );
};
export default Main;
