import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const PetDetail = () => {
  const [pet, setPet] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/pets/${id}`)
      .then((res) => setPet(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleAdopt = () => {
    //axios delete
    axios
      .delete(`http://localhost:8000/api/v1/pets/${id}`)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };
  console.log("pet", pet);
  return (
    <div className='container'>
      <div className='page-header'>
        <div className='header-wrapper'>
          {" "}
          <h1>Pet Shelter</h1>
          <Link to={`/`} className='header-link'>
            back to home
          </Link>
        </div>
        <div className='detail-wrapper'>
          {" "}
          <p>Details about :{pet.name}</p>
          <button className='adopt-btn' onClick={handleAdopt}>
            Adopt {pet.name}
          </button>
        </div>
      </div>

      <div className='card'>
        <div className='card-body'>
          <p className='card-text pet-name'>Name: {pet.name}</p>
          <p className='card-text'>Type: {pet.type}</p>
          <p className='card-text'>Description: {pet.description}</p>
          {pet?.skills?.length > 0 && (
            <>
              {" "}
              <p className='card-text'>Skill 1: {pet?.skills[0]}</p>
              <p className='card-text'>Skill 2: {pet?.skills[1]}</p>
              <p className='card-text'>Skill 3: {pet?.skills[2]}</p>
            </>
          )}
        </div>
        <button type='submit'>Like {pet.name}</button>
      </div>
    </div>
  );
};

export default PetDetail;
