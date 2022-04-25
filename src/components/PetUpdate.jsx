//componet for pet update
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const PetUpdate = () => {
  const [pet, setPet] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pets/${id}`)
      .then((res) => setPet(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatePet = {
      name: pet.name,
      type: pet.type,
      description: pet.description,
      skills: [pet.skills1, pet.skills2, pet.skills3],
    };
    console.log("updatePet", updatePet);

    axios
      .put(`http://localhost:8000/api/pets/${id}`, pet)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
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
        </div>{" "}
        <p>Edit :{pet.name}</p>
      </div>
      <div className='form-wrapper'>
        {" "}
        <form onSubmit={handleSubmit}>
          <div className='form-wrap'>
            <div className='div-left'>
              {" "}
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  name='name'
                  value={pet.name}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='type'>Type</label>
                <input
                  type='text'
                  className='form-control'
                  id='type'
                  name='type'
                  value={pet.type}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <input
                  type='text'
                  className='form-control'
                  id='description'
                  name='description'
                  value={pet.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='div-right'>
              {" "}
              {pet?.skills?.length > 0 && (
                <>
                  {" "}
                  <div className='form-group'>
                    <label htmlFor='skill1'>Skill 1</label>
                    <input
                      type='text'
                      className='form-control'
                      id='skill1'
                      name='skill1'
                      value={pet.skills[0]}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='skill2'>Skill 2</label>
                    <input
                      type='text'
                      className='form-control'
                      id='skill2'
                      name='skill2'
                      value={pet.skills[1]}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='skill2'>Skill 3</label>
                    <input
                      type='text'
                      className='form-control'
                      id='skill2'
                      name='skills3'
                      value={pet.skills[2]}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
              <button type='submit'>Edit Pet</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PetUpdate;
