    import React, { useEffect, useState } from 'react';
    import "../Input/Input.css";
    import axios from 'axios';
    import "./User.css";
    const User = () => {
      const [clicked, setClicked] = useState(false);
        const [users, setUsers] = useState([]);
        const deleteUser = async (userId) => {
            await axios.delete(`http://localhost:8080/api/delete/${userId}`)
            .then(() => {
                setUsers((prevUser) => prevUser.filter((user)=> user._id !== userId));

            })
            .catch((error)=>{
                console.log(error);
            })
    }
    const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:8080/api/getAll");
          setUsers(response.data);
        } catch (error) {
          console.error(error);
        }
      }

      useEffect(() => {
        fetchData()
      }, [users]);
    return (
        <div>
            {users.map((user) => (
                <div className='container'>
            <div className='userTable'>
            <div className='inner-container'>
            <div key={user._id} className='user-container'>
                <div className='inner-user-wrapper first-name'>{user.firstName}</div>
                <div className='inner-user-wrapper last-name'>{user.lastName}</div>
                <div className='inner-user-wrapper street'>{user.street}</div>
                <div className='inner-user-wrapper city'>{user.city}</div>
                <button className={clicked ? 'deleteUserWithBorder':'delete-user'} onClick={() => deleteUser(user._id)}>Remove</button>
                </div>
            </div>
            </div>
        </div>
        ))}
        </div>
    )
    }

    export default User;