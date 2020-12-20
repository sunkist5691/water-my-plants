import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { setLoggedStatus } from "../../actions";

const StyledDiv = styled.div`
max-width:100;
  background-image: url("https://images.unsplash.com/photo-1525923838299-2312b60f6d69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80");
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }

  @media (max-width: 500px) {
    height: 5vh;
  }
`;

const StyledText = styled.span`
  background-color: green;
  color: whitesmoke;
  text-decoration: none;

  padding: 0.4rem;
  font-size: 20px;
  border: 1px white solid;
  border-radius: 3px;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const StyledButton = styled.button`
  background-color: green;
  color:whitesmoke;
 text-decoration:none ; 
  padding: .4rem;
  font-size:20px;
  border: 1px white solid;
  border-radius: 3px;
  @media (max-width: 500px) {
    padding: 0.2rem;
  }:
`;

function Header({ isLoggedIn, setLoggedStatus }) {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedStatus(false);
    history.push("/login");
  };

  return (
    <div>
      {isLoggedIn ? (
        <StyledDiv>
          <Link to='/dashboard'>
            <StyledText>Dashboard</StyledText>
          </Link>
          <Link to='/add-plant'>
            <StyledText>Add Plant</StyledText>
          </Link>
          <Link to='/account'>
            <StyledText>Account</StyledText>
          </Link>
          <StyledButton onClick={handleLogout}>Logout</StyledButton>
        </StyledDiv>
      ) : (
        <StyledDiv>
          <Link to='/'>
            <StyledText className={"navlink"}>Home</StyledText>
          </Link>
          <Link to='/about'>
            <StyledText>About</StyledText>
          </Link>
          <Link to='/register'>
            <StyledText>Register</StyledText>
          </Link>
          <Link to='/login'>
            <StyledText>Login</StyledText>
          </Link>
        </StyledDiv>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = {
  setLoggedStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
