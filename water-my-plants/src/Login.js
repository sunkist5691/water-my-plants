import React, { useState, useEffect } from "react";
import * as yup from "yup";
import loginFormSchema from "./js/utils/loginFormSchema";
import axios from "axios"
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux"
import { setUser, setLoggedStatus } from "./actions"

const loginValues = {
  username: "",
  password: ""
};
const loginError = {
  username: "",
  password: ""
};
const initialDisabled = true;

const StyledLogin = styled.div`
  background-color: #b8d5cd;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  text-align: center;
  min-height: 80vh;
  width: 100%;
`;

function Login({setLoggedStatus, setUser}) {
  const history = useHistory();
  const [disabled, setDisabled] = useState(initialDisabled);
  const [loginFormValues, setloginFormValues] = useState(loginValues);
  const [loginFormErrors, setloginFormErrors] = useState(loginError);
  const [loginErr, setLoginErr] = useState("")

  const onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginErr("")
    yup
      .reach(loginFormSchema, name)
      .validate(value)
      .then(valid => {
        setloginFormErrors({
          ...loginFormErrors,
          [name]: ""
        });
      })
      .catch(e => {
        setloginFormErrors({
          ...loginFormErrors,
          [name]: e.errors[0]
        });
      });
    setloginFormValues({
      ...loginFormValues,
      [name]: value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    setLoginErr("")
    axios
      .post("https://water-my-plants-tt50.herokuapp.com/api/auth/login", loginFormValues)
      .then(res => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user_id", res.data.user_id)
        setLoggedStatus(true)
      })
      .then(() => {
        history.push("/dashboard")
      })
      .catch(() => {
        setLoginErr("Invalid Username and Password Combination")
      })
  };

  useEffect(() => {
    loginFormSchema.isValid(loginFormValues).then(valid => {
      setDisabled(!valid);
    });
  }, [loginFormValues]);

  return (
    <StyledLogin>
      <div>
        <form onSubmit={onSubmit}>
          <h1>Login</h1>

          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginFormValues.username}
              onChange={onChange}
            />
            <div className="error" style={{ color: "red" }}>
              {loginFormErrors.username}
            </div>
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginFormValues.password}
              onChange={onChange}
            />
            <div className="error" style={{ color: "red" }}>
              {loginFormErrors.password}
            </div>
          </div>

          <div>
            <button id="submit" className="disabled" disabled={disabled}>
              Submit
            </button>
          </div>
          <div className="error" style={{ color: "red" }}>
            {loginErr}
          </div>

          <Link to="/register">
            Don't have an account? Click Here To Create One
          </Link>
        </form>
      </div>
    </StyledLogin>
  );
}

const mapDispatchToProps = {
  setUser,
  setLoggedStatus,
};

export default connect(null, mapDispatchToProps)(Login)