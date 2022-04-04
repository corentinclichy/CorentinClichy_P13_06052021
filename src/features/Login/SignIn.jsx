import React, { useState } from "react";

// Other Libraries imports
import { useHistory } from "react-router-dom";

//State management imports

import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "./userSlice";

// Style
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Assets
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

/**
 * @name SignIn
 * @description SignIn page
 * @param {object} props
 * @returns {JSX}
 */
function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Test User

  // First Name: `Tony`
  // Last Name: `Stark`
  // Email: `tony@stark.com`
  // Password: `password123`

  // First Name: `Steve`,
  // Last Name: `Rogers`,
  // Email: `steve@rogers.com`,
  // Password: `password456`

  // States
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isRememberMe, setIsRememberMe] = useState(true);

  const isFirstLoad = useSelector((state) => state.user.data.isFirstLoad);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if remember me is checked
    dispatch(
      getUserToken({
        email: userName,
        password: password,
        isRememberMe: isRememberMe,
        isFirstLoad: isFirstLoad,
      })
    ).then((res) => {
      // Redirect to the user page if the user is logged in
      if (res.payload.isConnected) {
        history.push("/user");
      } else {
        setErrorMessage("Please enter a valid email and password");
      }
    });
  };

  const handleToggleRememberMe = (e) => {
    setIsRememberMe(e.target.checked);
  };

  return (
    <SignInContent>
      <FontAwesomeIcon icon={faUserCircle} />
      <h1>Sign In</h1>
      <SignInForm onSubmit={handleSubmit}>
        <InputWrapper>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <InputRemember>
          <input
            type="checkbox"
            id="remember-me"
            onChange={handleToggleRememberMe}
            checked={isRememberMe}
          />
          <label htmlFor="remember-me">Remember me</label>
        </InputRemember>
        <InputButton>Sign In</InputButton>
      </SignInForm>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </SignInContent>
  );
}

// Styles
const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;

const SignInForm = styled.form``;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;

  label {
    font-weight: bold;
  }
`;
const InputRemember = styled.div`
  display: flex;

  label {
    margin-left: 0.25rem;
  }

  input {
    padding: 5px;
    font-size: 1.2rem;
  }
`;
const InputButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;

const ErrorMessage = styled.p`
  color: red;
`;

export default SignIn;
