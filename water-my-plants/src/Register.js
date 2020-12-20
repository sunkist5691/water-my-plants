import React, { useState, useEffect } from "react";
import styled from "styled-components";
import plantImg from "../src/images/pic01.jpg";
import { useHistory } from "react-router-dom";
import formSchema from "./formSchema";
import axios from "axios";
import * as yup from "yup";

const StyledDiv = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  background-color: #b8d5cd;
  justify-content: space-around;
  align-items: center;
`;

const StyledForm = styled.div`
  color: white;
  text-shadow: 2px 2px black;
  background-color: #006a4e;
  border-radius: 5%;
  width: 40%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  font-size: 1.4rem;
  @media (max-width: 500px) {
    width: 50%;
    font-size: 1rem;
    text-align: center;
  }
`;

const StyledImg = styled.img`
  width: 30%;
  height: 80vh;
  object-fit: contain;
`;

export default function Register(props) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const history = useHistory();
  const intiailFormValues = {
    username: "",
    phone_number: "",
    password: ""
  };

  const defaultErrors = {
    username: "",
    phone_number: "",
    password: ""
  };

  const [formState, setFormState] = useState(intiailFormValues);
  const [errorState, setErrorState] = useState(defaultErrors);

  const validate = event => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then(valid => {
        setErrorState({ ...errorState, [event.target.name]: "" });
      })
      .catch(err => {
        console.log(err);
        setErrorState({ ...errorState, [event.target.name]: err.errors[0] });
      });
  };

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const onChange = event => {
    event.persist();
    validate(event);

    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    axios
      .post(
        "https://water-my-plants-tt50.herokuapp.com/api/auth/register",
        formState
      )
      .then(() => {
        setFormState({
          username: "",
          phone_number: "",
          password: ""
        });
        history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <StyledDiv>
        <StyledForm>
          <h2>Registration form</h2>
          <form onSubmit={onSubmit}>
            <label htmlFor="username">
              Username: <br />
              <input
                id="username"
                type="text"
                name="username"
                data-cy="username"
                placeholder="Enter your username"
                onChange={onChange}
                value={formState.username}
              />
            </label>
            <br />
            <p>{errorState.username}</p>

            <label htmlFor="phone_number">
              Phone number:
              <br />
              <input
                id="phone_number"
                type="text"
                placeholder="Enter your phone #"
                data-cy="phone_number"
                name="phone_number"
                onChange={onChange}
                value={formState.phone_number}
              />
            </label>
            <br />
            <p>{errorState.phone_number}</p>
            <label htmlFor="password">
              Password: <br />
              <input
                type="password"
                name="password"
                data-cy="password"
                id="password"
                placeholder="Create a password"
                value={formState.password}
                onChange={onChange}
              />
            </label>
            <p>{errorState.password}</p>

            <input
              type="submit"
              value="Click to submit"
              disabled={buttonDisabled}
            />
          </form>
        </StyledForm>
        <StyledImg src={plantImg} alt="plant" />
      </StyledDiv>
    </div>
  );
}
