import { useState, useEffect } from "react";
import { axiosWithAuth } from "../auth/axiosWithAuth";
import styled from "styled-components";

function UpdateUser({ user, setUser }) {
  useEffect(() => {
    if(user === null) {
      const id = localStorage.getItem("user_id");
    axiosWithAuth()
      .get(`/api/account/${id}`)
      .then(res => {
        setUser(res.data.user);
        setUpdatedUser({
          ...updatedUser,
          phone_number: res.data.user.phone_number
        })
      })
      .catch(err => {
        console.log(err);
      });
    }
  }, [])

  const [updatedUser, setUpdatedUser] = useState({
    password: "",
    phone_number: user ? user.phone_number : "",
  });

  const [errMessage, setErrMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setErrMessage("");
    setSuccessMessage("");
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

  const updateAccount = (e) => {
    e.preventDefault();
    setErrMessage("");
    setSuccessMessage("");
    if (
      updatedUser.phone_number !== user.phone_number &&
      updatedUser.password !== ""
    ) {
      axiosWithAuth()
        .put(`/api/account/${user.id}`, updatedUser)
        .then((res) => {
          setUser(res.data);
          setSuccessMessage("Infomation Updates");
        })
        .catch((err) => {
          setErrMessage("Failed to update info");
        });
    } else if (
      updatedUser.phone_number === user.phone_number &&
      updatedUser.password !== ""
    ) {
      console.log("correct");
      axiosWithAuth()
        .put(`/api/account/${user.id}`, { password: updatedUser.password })
        .then((res) => {
          setUser(res.data);
          setSuccessMessage("Password Updated");
        })
        .catch((err) => {
          setErrMessage("Failed to update password");
        });
    } else if (updatedUser.phone_number !== user.phone_number) {
      axiosWithAuth()
        .put(`/api/account/${user.id}`, {
          phone_number: updatedUser.phone_number,
        })
        .then((res) => {
          setUser(res.data);
          setSuccessMessage("Phone Number Updated");
        })
        .catch((err) => {
          setErrMessage("Failed to update phone number");
        });
    } else {
      setErrMessage("You must make changes to update");
    }
  };

  return (
    <Container>
      <div className='user-card'>
        <div className='user-card'>
          <h3>Welcome {user ? user.username : null},</h3>
          <p></p>
        </div>
      </div>

      <h4>Account Information:</h4>
      {errMessage && <div className='error'>{errMessage}</div>}
      {successMessage && <div className='success'>{successMessage}</div>}
      <form onSubmit={updateAccount}>
        <input
          type='text'
          name='phone_number'
          placeholder='New Phone Number'
          value={updatedUser.phone_number}
          onChange={handleChange}
          autoComplete='off'
        />
        <input
          type='password'
          name='password'
          placeholder='New Password'
          value={updatedUser.password}
          onChange={handleChange}
          autoComplete='off'
        />
        <button type='submit'>Update</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  .error {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    color: red;
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }

  .success {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    color: green;
    font-size: 1.4rem;
  }

 
  h4 {
      display:flex;
      justify-content:center;
    color: black;
    border-bottom: 0.5px solid black;
    @media (max-width: 500px) {
      font-size: 30px;
    }
  }

  .user-card {
    background: #006A4E;
    max-width: 100%;
    height:8vh;
    border-radius:5px;
    color: white;
    font-size:30px;
    .card- {
      display:flex;
      max-width: 90%;
      align-items: center;
    }
  }

  form {
    display:flex;
    flex-direction: column;
    align-items:center;

    input {
      margin: 5px;
      width: 300px;
      height: 50px;
      background: white;
      border: 3px #006A4E solid;
      border-radius: 5px;
      font-size: 30px;
      letter-spacing: 0.25rem;
      @media (max-width: 500px) {
        width: 8rem;
        font-size: 1rem;
      }

      &:focus {
        outline: none;
        border: 1px solid white;
      }
    }

    button {
      width: 300px;
      height: 50px;
      margin: 10px;
      font-size:30px;
      color:white;
      background: #006A4E;
      transition: all 100ms;
      border-radius:3%;

      &:hover {
        transition: background 100ms;
        cursor: pointer;
        font-size:30px;
        background: #006A4E;
      }
    }
  }
`

export default UpdateUser;
