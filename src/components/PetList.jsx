//render pets list
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PetList = ({ pets, setPets }) => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => setPets(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log("pets", pets);
  return (
    <div>
      <div className='page-header'>
        <div className='header-wrapper'>
          {" "}
          <h1>Pet Shelter</h1>
          <Link to={`/pets/new`} className='header-link'>
            Add a new pet
          </Link>
        </div>

        <p>These pets are looking for a good home</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Skill 1</th>
            <th>Skill 2</th>
            <th>Skill 3</th>
            <th colSpan={3}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets?.map((pet) => (
            <tr key={pet._id}>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td>{pet.description}</td>
              <td>{pet.skills[0]}</td>
              <td>{pet.skills[1]}</td>
              <td>{pet.skills[2]}</td>
              <td>
                <Link to={`/pet/${pet._id}`}>Details</Link>
              </td>
              <td>
                <Link to={`/pet/update/${pet._id}`}>Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PetList;
