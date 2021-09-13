import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Style
import styled from "styled-components";

// Assets
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

/**
 * @name SignIn
 * @description SignIn page
 * @param {object} props
 * @returns {JSX}
 */
function SignIn() {
  return (
    <SignInContent>
      <FontAwesomeIcon icon={faUserCircle} />
      <h1>Sign In</h1>
      <SignInForm>
        <InputWrapper>
          <label for="username">Username</label>
          <input type="text" id="username" />
        </InputWrapper>
        <InputWrapper>
          <label for="password">Password</label>
          <input type="password" id="password" />
        </InputWrapper>
        <InputRemember>
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </InputRemember>
        <InputButton>Sign In</InputButton>
      </SignInForm>
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

export default SignIn;
