// LIB IMPORTS
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ASSETS
import Logo from "../../public/argentBankLogo.png";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

// TODO
// TODO: Add Link to Sign In with react-router-dom
// TODO: Add Link to Home on the logo with react-router-dom

/**
 * @name Header
 * @returns {React.Component}
 */

function Header() {
  return (
    <MainNav>
      <MainNavLogo href="./index.html">
        <img src={Logo} alt="" />
        <h1 className="sr-only">Argent Bank</h1>
      </MainNavLogo>
      <div>
        <MainNavItem href="./sign-in.html">
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </MainNavItem>
      </div>
    </MainNav>
  );
}

// style for the header
const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
`;

const MainNavLogo = styled.a`
  display: flex;
  align-items: center;

  img {
    max-width: 100%;
    width: 200px;
  }
`;

const MainNavItem = styled.a`
  text-decoration: none;
  margin-right: 0.5rem;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export default Header;
