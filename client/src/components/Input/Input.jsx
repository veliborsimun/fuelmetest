import React, { useEffect, useState} from 'react';
import axios from "axios";
import "./Input.css";

const Input = () => {
     const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    });
     const [clicked, setClicked] = useState(false);
     async function onSubmit(e) {
       e.preventDefault();
       setClicked(true)
    if (!user || !user.firstName || !user.lastName || !user.street || !user.city) {
        alert('All fields must be filled!');
        setClicked(false)
        return;
      }
      const response = await axios.post("http://localhost:8080/api/create", user);
      if(response.status === 200) {
        setUser({
            firstName: "",
            lastName: "",
            street: "",
            city: ""
          });      
        }
      setClicked(false)
   }

    function onChange(value, property) {
      setUser({...user, [property]: value})
    }

     return (
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='container'>
            <div className='userTable'>
            <div className='inner-container'>
              <div className='input-wrapper'>
              <label>FirstName</label>
              <input className='firstTypeInput' value={user.firstName} placeholder='Firstname' onChange={(e) => onChange(e.target.value, "firstName")}/>
              </div>
              <div className='input-wrapper'>
              <label>LastName</label>
              <input placeholder='Lastname' className='firstTypeInput' value={user.lastName} onChange={(e) => onChange(e.target.value, "lastName")}/>
              </div>
              <div className='input-wrapper'>
              <label>Street</label>
              <input placeholder='Street' className='secondTypeInput' value={user.street} onChange={(e) => onChange(e.target.value, "street")}/>
              </div>
              <div className='input-wrapper'>
              <label>City</label>
              <input placeholder='City' className='secondTypeInput' value={user.city} onChange={(e) => onChange(e.target.value, "city")}/>
              </div>
              <div className='input-wrapper'> 
                <button className={clicked ? "addButtonWithBorder" : 'addButton'} type='submit'>Insert</button>
              </div>
            </div>
        </div>
        </div>
        </form>
     )
}

export default Input;
