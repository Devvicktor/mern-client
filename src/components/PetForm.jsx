import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const PetForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPet = {
      name,
      type,
      description,
      skills: [skill1, skill2, skill3],
    };
    console.log("newPet", newPet);
    axios
      .post("http://localhost:8000/api/pets", newPet)
      .then((res) => navigate("/"))
      .catch((err) => {
        console.log("ERR", err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <div className='page-header'>
        <div className='header-wrapper'>
          {" "}
          <h1>Pet Shelter</h1>
          <Link to={`/`} className='header-link'>
            back to home
          </Link>
        </div>
        <p>Know a pet needing a home?</p>
      </div>
      <div className='form-wrapper'>
        <form onSubmit={handleSubmit}>
          <div className='form-wrap'>
            <div className='div-left'>
              {" "}
              <div>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  minLength='3'
                />
                {errors.name && (
                  <div className=' alert-danger'>{errors.name.message}</div>
                )}
              </div>
              <div>
                <label htmlFor='type'>Type</label>
                <input
                  type='text'
                  className='form-control'
                  id='type'
                  name='type'
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  minLength='3'
                />
                {errors.type && (
                  <div className='alert alert-danger'>
                    {errors.type.message}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor='description'>Description</label>
                <input
                  type='text'
                  className='form-control'
                  id='description'
                  name='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  minLength='3'
                />
                {errors.description && (
                  <div className='alert alert-danger'>
                    {errors.description.message}
                  </div>
                )}
              </div>
            </div>

            <div className='div-right'>
              <div>
                <label htmlFor='skill1'>Skill 1 (Optional)</label>
                <input
                  type='text'
                  className='form-control'
                  id='skill1'
                  name='skill1'
                  value={skill1}
                  onChange={(e) => setSkill1(e.target.value)}
                />
                {errors.skill1 && (
                  <div className='alert alert-danger'>{errors.skill1}</div>
                )}
              </div>
              <div>
                <label htmlFor='skill2'>Skill 2 (Optional)</label>
                <input
                  type='text'
                  className='form-control'
                  id='skill2'
                  value={skill2}
                  name='skill2'
                  onChange={(e) => setSkill2(e.target.value)}
                />
                {errors.skill2 && (
                  <div className='alert alert-danger'>{errors.skill2}</div>
                )}
              </div>
              <div>
                <label htmlFor='skill3'>Skill 3 (Optional)</label>
                <input
                  type='text'
                  className='form-control'
                  id='skill3'
                  value={skill3}
                  name='skill3'
                  onChange={(e) => setSkill3(e.target.value)}
                />
                {errors.skill3 && (
                  <div className='alert alert-danger'>{errors.skill3}</div>
                )}
              </div>{" "}
              <button type='submit'>Add Pet</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PetForm;
